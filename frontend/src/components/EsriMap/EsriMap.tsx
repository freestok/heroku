import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './EsriMap.module.css';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';
import { Box, Center, Container, HStack } from '@chakra-ui/react';
import { CardWithImage, SmallCardContainer } from '../CardWithImage/CardWithImage';
import { DragControls } from 'framer-motion';
interface EsriMapProps { }

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


      // bonus - how many bookmarks in the webmap?
      webmap.when(() => {
        const exhibitLayer = view.map.allLayers.find(lyr => {
          console.log('lyr', lyr.title);
          return lyr.title === 'Exhibits';
        }) as unknown as  __esri.FeatureLayer;
        // const a: __esri.FeatureLayer = exhibitLayer;
        console.log('exhibitLayer', exhibitLayer);
        
  
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
              console.log('exhibit', exhibit);
              const layer = exhibit.graphic.layer as unknown as any;
              const relId: number = layer.relationships[0].id;
              const objId = exhibit.graphic.attributes.OBJECTID
              console.log('relId', relId);
              const query = {
                outFields: ['*'],
                relationshipId: relId,
                objectIds: [objId]
              }
              const queryResult = await exhibitLayer.queryRelatedFeatures(query);
              const animalsRaw = queryResult[objId].features;
              const animals = animalsRaw.map((e: any) => e.attributes);
              setItems(animals);
              console.log('queryResult', queryResult);
              console.log('animals', animals);
            }
      
            // if (response.results.length) {
            //   let graphic = response.results.filter(function (result) {
            //     // check if the graphic belongs to the layer of interest
            //     return result.graphic.layer === myLayer;
            //   })[0].graphic;

            //   // do something with the result graphic
            //   console.log(graphic.attributes);
            // }
          });
        });
      });
      // view.ui.add('animalCard', 'manual')
    }
  }, []);

  // const items = [{
  //   name: 'Lemur', key: 0, img: 'https://images.newscientist.com/wp-content/uploads/2020/07/09113311/08-july_lemurs.jpg?crop=4:3,smart&width=1200&height=900&upscale=true'
  // }, {
  //   name: 'Panda', key: 1, img: 'https://static.scientificamerican.com/sciam/cache/file/ACF0A7DC-14E3-4263-93F438F6DA8CE98A_source.jpg'
  // }, {
  //   name: 'Yark', key: 2, img: 'https://www.askideas.com/media/15/Black-And-White-Cockapoo-Cute-Puppy.jpg'
  // }]

  return (
    <div className={styles.EsriMap}>
      <div className={styles.mapDiv} ref={mapDiv}></div>
      <div className={styles.sidebar}>
        <SmallCardContainer items={items} />
      </div>
    </div>
  )
};

export default EsriMap;
