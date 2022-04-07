import React, { FC, useEffect, useRef } from 'react';
import styles from './EsriMap.module.css';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';
import { Box, Center, Container, HStack } from '@chakra-ui/react';
import { CardWithImage, SmallCardContainer } from '../CardWithImage/CardWithImage';
interface EsriMapProps { }

const EsriMap: FC<EsriMapProps> = () => {
  const mapDiv = useRef(null);

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

      // const bookmarks = new Bookmarks({
      //   view,
      //   // allows bookmarks to be added, edited, or deleted
      //   editingEnabled: true
      // });

      // const bkExpand = new Expand({
      //   view,
      //   content: bookmarks,
      //   expanded: true
      // });

      // Add the widget to the top-right corner of the view
      // view.ui.add(bkExpand, 'top-right');

      // bonus - how many bookmarks in the webmap?
      webmap.when(() => {
      });
      // view.ui.add('animalCard', 'manual')
    }
  }, []);

  const items = [{
    name: 'Lemur', key: 0, img: 'https://images.newscientist.com/wp-content/uploads/2020/07/09113311/08-july_lemurs.jpg?crop=4:3,smart&width=1200&height=900&upscale=true'
  }, {
    name: 'Panda', key: 1, img: 'https://static.scientificamerican.com/sciam/cache/file/ACF0A7DC-14E3-4263-93F438F6DA8CE98A_source.jpg'
  }, {
    name: 'Yark', key: 2, img: 'https://www.askideas.com/media/15/Black-And-White-Cockapoo-Cute-Puppy.jpg'
  }]

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
