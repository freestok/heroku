import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './EsriMap.module.css';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';
import Search from '@arcgis/core/widgets/Search';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Graphic from '@arcgis/core/Graphic';
import { Box, Center, Container, HStack } from '@chakra-ui/react';
import { CardWithImage, SmallCardContainer } from '../CardWithImage/CardWithImage';
import { DragControls } from 'framer-motion';
interface EsriMapProps { }

// const searchGraphics = new GraphicsLayer();
// const clickGraphics = new GraphicsLayer();

const EsriMap: FC<EsriMapProps> = () => {
  const mapDiv = useRef(null);
  const [items, setItems] = useState([] as unknown as any);
  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize application
       */
      const webmap = new WebMap({
        portalItem: {
          id: '753ce852ca214f208edbc33a6069a985'
        }
      });

      const view = new MapView({
        container: mapDiv.current,
        map: webmap
      });

      // webmap.addMany([searchGraphics, clickGraphics]);
      
      // webmap.reorder(searchGraphics, webmap.allLayers.length);
      // webmap.reorder(clickGraphics, webmap.allLayers.length);


      // bonus - how many bookmarks in the webmap?
      webmap.when(() => {
        const exhibitLayer = view.map.allLayers.find(lyr => {
          console.log('lyr', lyr.title);
          return lyr.title === 'Exhibits';
        }) as unknown as FeatureLayer;

        // set-up the search bar
        searchBar(view, exhibitLayer, setItems);


        // Get the screen point from the view's click event
        view.on('click', (event) => {
          // Search for graphics at the clicked location. View events can be used
          // as screen locations as they expose an x,y coordinate that conforms
          // to the ScreenPoint definition.
          view.hitTest(event).then(async (response) => {
            console.log('response', response);
            for (let r of response.results) {
              console.log(r.graphic.layer.title);
            }
            const exhibit = response.results?.find(e => e.graphic.layer.title === 'Exhibits');
            if (exhibit) {
              createHighlightGraphic(view, exhibit.graphic.geometry);
              const options: __esri.GoToOptions2D = {
                duration: 500, // time in milliseconds
                easing: 'ease-in' // easing function to slow down when reaching the target
              };
              view.goTo({target: exhibit.graphic.geometry, scale: 900}, options);

              const animals = await getAnimals(exhibit, exhibitLayer);
              setItems(animals);
              console.log('animals', animals);
            }
          });
        });
      });
    }
  }, []);

  return (
    <div className={styles.EsriMap}>
      <div className={styles.mapDiv} ref={mapDiv}></div>
      <div className={styles.sidebar}>
        <SmallCardContainer items={items} />
      </div>
    </div>
  )
};

async function getAnimals(exhibit: any, exhibitLayer: FeatureLayer) {
  console.log('exhibit', exhibit);

  let layer: any, objId: any;
  if (exhibit.graphic) {
    layer = exhibit.graphic.layer;
    objId = exhibit.graphic.attributes.OBJECTID
  } else {
    layer = exhibit.layer;
    objId = exhibit.attributes.OBJECTID
  }
  // const layer = exhibit.graphic.layer as unknown as any;
  const relId: number = layer.relationships[0].id;
  console.log('relId', relId);
  const query = {
    outFields: ['*'],
    relationshipId: relId,
    objectIds: [objId]
  }
  const queryResult = await exhibitLayer.queryRelatedFeatures(query);
  console.log('queryResult', queryResult);
  const animalsRaw = queryResult[objId].features;
  const animals = animalsRaw.map((e: any) => e.attributes);
  return animals;
}

function searchBar(view: MapView, exhibitLayer: FeatureLayer, setItems: React.Dispatch<any>) {
  // typical usage
  const sources = {
    layer: new FeatureLayer({
      url: 'https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/johnBallZoo/FeatureServer/7',
      outFields: ['*']
    }),
    searchFields: ['name', 'scientificName'],
    displayField: 'name',
    exactMatch: false,
    outFields: ['*'],
    name: 'Animals',
    placeholder: 'Search for an animal...',
    maxResults: 6,
    maxSuggestions: 6,
    suggestionsEnabled: true,
    minSuggestCharacters: 0
  }
  const searchWidget = new Search({
    view: view,
    sources: [sources],
    includeDefaultSources: false
  });
  console.log('searchWidget.sources', searchWidget.sources);
  // searchWidget.sources.remove()
  view.ui.add(searchWidget, {
    position: 'top-right',
    index: 2
  });

  searchWidget.on('search-complete', async (event) => {
    const exhibitId = event.results[0]?.results[0]?.feature.attributes.exhibitId;
    console.log('exhibitId', exhibitId);
    // const q = new __esri.Query({
    //   where: `id=${exhibitId}`
    // })
    const queryRes = await exhibitLayer.queryFeatures();
    console.log('queryRes', JSON.parse(JSON.stringify(queryRes)));
    const exhibit = queryRes.features.find(e => e.attributes.id === exhibitId);
    console.log('exhibit', JSON.parse(JSON.stringify(exhibit)));
    console.log('exhibit json', JSON.stringify(exhibit?.layer))
    const options: __esri.GoToOptions2D = {
      duration: 750, // time in milliseconds
      easing: 'ease-in' // easing function to slow down when reaching the target
    };
    view.goTo({target: exhibit?.geometry, scale: 900}, options);
    createHighlightGraphic(view, exhibit?.geometry as __esri.Geometry);

    const animals = await getAnimals(exhibit, exhibitLayer);
    setItems(animals);
    // view.graphics.add(exhibit);

    // view.graphics.add()
    // const query = {
    //   outFields: ['*'],
    //   relationshipId: relId,
    //   objectIds: [objId]
    // }

    // console.log('event', event.results[0].results[0].feature.attributes);
  });
}

function createHighlightGraphic(view: MapView, geom: __esri.Geometry) {
  view.graphics.removeAll();
  const symbol = {
    type: 'simple-fill',
    outline: { width: 1.5, color: [46, 246, 248, 1] },
    color: [64, 236, 238, 0.25]
  }
  const graphic = new Graphic({
    geometry: geom,
    symbol: symbol
  });
  view.graphics.add(graphic);
}
export default EsriMap;
