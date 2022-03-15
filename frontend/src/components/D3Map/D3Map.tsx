import * as d3 from 'd3';
// import * as topojson from 'topojson-server';
import * as topojson from 'topojson-client';
import { GeometryObject, Topology } from 'topojson-specification';
import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './D3Map.module.css';
import { Box, Center, Container, Flex, VStack, Text, HStack } from "@chakra-ui/react";
import { Feature, Polygon, Point, GeoJsonProperties } from 'geojson';
import chroma from 'chroma-js';
import d3Legend, { legendColor } from 'd3-svg-legend';

interface D3MapProps {
  data: any,
  passD3Data: React.Dispatch<React.SetStateAction<D3DataProps>>,
  complete: boolean
}

interface D3DataProps {
  nitrate: D3Feature;
  tracts: D3Feature;
  analysisResults: any;
}

interface D3Feature {
  type: string;
  features: Array<any>;
}
// https://levelup.gitconnected.com/react-d3-rendering-a-map-5e006b2f4895


const width = 500;
const height = 950;
const diverging = chroma
  .scale('PuOr')
  .colors(8);
// .classes([-2.5,-1.5,-0.5,0.5,1.5,2.5])
// .colors(7);

// goes from 0-1
const continuousChroma = chroma.scale('purples');


////////////////////////////////////////////////////// 
// RENDER THE CHART USING D3
//////////////////////////////////////////////////////   
const renderInitialMap = (data: any, path: any, svgRef: any) => {
  const svg = d3.select(svgRef.current);
  svg.selectAll('*').remove();

  const g = svg.append('g');
  g.selectAll('path')
    .data(data.features).enter().append('path')
    // .attr('class', (d: any) => d.properties.name)
    .attr('class', () => 'tractPath')
    .attr('d', path)
    .style('fill', (d: any) => '#5d80b4')
    // .append('tractBorders')
    .style("stroke-width", "0.25")
    .style("stroke", "black");


  const zoom = d3.zoom()
    .scaleExtent([1, 25])
    .on('zoom', (event) => {
      g.selectAll('path').attr('transform', event.transform)
    });
  svg.call(zoom);
};

const getColor = (val: any, symbol: string): string => {
  // diverging
  // console.log(val);
  let valColor = 'grey';
  if (symbol === 'canrate') {
    valColor = continuousChroma(val) as unknown as string;
    // console.log('valColor', valColor);
  } else if (symbol === 'stdResid') {
    valColor = val < -2.5 ? diverging[0] :
      val <= -1.5 ? diverging[1] :
        val <= -0.5 ? diverging[2] :
          val <= 0.5 ? diverging[3] :
            val <= 1.5 ? diverging[5] :
              val <= 2.5 ? diverging[6] :
                val > 2.5 ? diverging[7] :
                  'grey';

  } else if (symbol === 'fitVal') {

  } else if (symbol === 'mean') {
    // -1 to 16
    let min = -1;
    let max = 16
    let range = max - min;
    let interpolatedVal = ((val - min)) / range
    // console.log('interpolatedVal');
    valColor = continuousChroma(interpolatedVal) as unknown as string;

    // let valColor2 = continuousChroma(interpolatedVal).name;
    // console.log('valColor2', valColor2);
  } else if (symbol === 'residuals') {
    valColor = continuousChroma(val) as unknown as string;
  }

  return valColor;
}

const renderResult = (data: any, path: any, svgRef: React.MutableRefObject<any>, setPopup: React.Dispatch<React.SetStateAction<PopupInfoProps>>) => {
  // if a user changes radio button, it changes which column the 
  // fill is based on; defaults to cancer rate
  const fieldSymbol = (data.symbol) ? data.symbol : 'canrate';

  // console.log('data', data);
  const tempObj: any = {}
  data.features.map((e: any) => tempObj[e.properties.GEOID10?.toString()] = e);
  // console.log('path', path);

  // console.log('d3.selectAll', d3.selectAll('path'));
  d3.selectAll('path')
    .style('fill', (d: any) => {
      if (d) {
        // console.log('d', d);
        const otherInfo = tempObj[d.properties.GEOID10];
        if (otherInfo) {
          return getColor(tempObj[d.properties.GEOID10].properties[fieldSymbol], fieldSymbol);
        }
        // // console.log('otherInfo', otherInfo);
        // console.log('fieldSymbol', fieldSymbol);
      }
      return null;
    })
    .on('mouseover', (event, d: any) => {
      const otherInfo = tempObj[d.properties.GEOID10];
      // otherInfo.properties.symbol = fieldSymbol;
      if (otherInfo) {
        const popupContent = {
          data: otherInfo.properties,
          title: otherInfo.properties.GEOID10,
          symbol: fieldSymbol
        }
        // console.log('popupContent', popupContent);
        setPopup(popupContent);
      }
    });
};

// function getPopupInfo(data) {

// }
interface PopupInfoProps {
  title: string;
  data: any; // data from setPopup method
  symbol: string;
}

const aliasMapper: any = {
  canrate: 'Cancer Rate',
  mean: 'Average Nitrate',
  fitVal: 'Predicted Cancer Rate',
  residuals: 'Residual',
  stdResid: 'Standardized Residual'
}
const PopupInfo: FC<PopupInfoProps> = (props: PopupInfoProps) => {
  const svgRef = useRef<any>(null);
  const svg = d3.select(svgRef.current);
  const [legendTitle, setLegendTitle] = useState('')
  // const [symbol, setSymbol] = useState(false)
  // if (!symbol) {
  //   svgLegend(svg, 'canrate')
  //   setLegendTitle(aliasMapper['canrate'])
  // }
  // console.log('AHHHHHHHHHHHHHHHHHHHHHHHHHH')
  svgLegend(svg, props.symbol ? props.symbol : 'canrate')
  useEffect(() => {
    const symbolName = props.symbol ? props.symbol : 'canrate'
    svgLegend(svg, symbolName);
    setLegendTitle(aliasMapper[symbolName])
  }, [props.symbol])


  return (
    <Box p={2} ml={3} mr={3} borderWidth={1} w='full' h='full' borderRadius={8} bg="purple.100" boxShadow="lg">

      {props.data
        ?
        <HStack spacing='2px'>
          <Box p={2} ml={3} mr={3} w='full' h='full'>
            <Text fontSize="2xl" fontWeight="bold">
              Tract {props.title}
            </Text>
            <Text>Cancer Rate: {props.data?.canrate.toFixed(3)}</Text>
            <Text>Average Nitrate: {props.data?.mean.toFixed(3)}</Text>
            <Text>Predicted Cancer Rate: {props.data?.fitVal.toFixed(3)}</Text>
            <Text>Residual: {props.data?.residuals.toFixed(3)}</Text>
            <Text>Standardized Residual: {props.data?.stdResid.toFixed(3)}</Text>

          </Box>
          <Box p={2} ml={3} mr={3} w='full' h='full'>
            <Center h='10' >
              <Text fontSize="2xl">
                {legendTitle}
              </Text>
            </Center>
            <Center>
              <svg ref={svgRef}
                style={{
                  height: "100%",
                  width: legendTitle !== 'Standardized Residual' ? '15em': '22em',
                  marginRight: "0em",
                  marginLeft: "0em",
                  marginTop: "0em",
                  marginBottom: "0em"
                }} />
            </Center>
          </Box>
        </HStack>
        :
        <Center h='10' >
          <Text fontSize="2xl">
            Hover over tracts to get more info...
          </Text>
        </Center>
      }
    </Box>
  )
};

const D3Map: FC<D3MapProps> = (props: D3MapProps) => {

  //////////////////////////////////////////////////////
  // REFs
  //////////////////////////////////////////////////////
  const componentRef = useRef<any>(null);
  const svgRef = useRef<any>(null);
  const projRef = useRef(d3.geoMercator()
    .center([-89.8024, 44.5381])
    .scale(4500));
  const [symbol, setSymbol] = useState('');
  const [popup, setPopup] = useState({ data: null, title: null } as unknown as PopupInfoProps);
  const { nitrateFile, tractsFile } = props.data;

  // const topoFeat = topojson.feature
  const nitrateTopo = topojson.feature(nitrateFile, nitrateFile.objects.nitrate_wgs84) as unknown as D3Feature;
  const tractsTopo = topojson.feature(tractsFile, tractsFile.objects.cancer_tracts_wgs84) as unknown as D3Feature;
  const path = d3.geoPath().projection(projRef.current)

  useEffect(() => {
    props.passD3Data({
      nitrate: nitrateTopo,
      tracts: tractsTopo,
      analysisResults: props.data.analysisResults
    });

    if (props.data.analysisResults) {
      setSymbol(props.data.analysisResults.symbol);
      renderResult(props.data.analysisResults, path, svgRef, setPopup);
    } else {
      renderInitialMap(tractsTopo, path, svgRef);
    }
  }, [props.data])

  const size = useWindowSize();

  return (
    <div ref={componentRef} className={styles.D3Map}>
      <VStack>
        <svg ref={svgRef}
          viewBox={props.complete ? `0 -80 ${size.width} ${size.height}` : `0 -175 ${size.width * 1.25} ${size.height * 1.5}`}
          style={{
            height: "50%",
            marginRight: "0px",
            marginLeft: "0px",
            marginTop: "0em",
            vectorEffect: "non-scaling-stroke"
          }} />
        {props.complete &&
          <PopupInfo data={popup.data} symbol={symbol} title={popup.title} />
        }
      </VStack>
    </div>
  )
};

function svgLegend(svg: d3.Selection<any, unknown, null, undefined>, type: string) {
  svg.selectAll('*').remove();
  svg.append("g")
    .attr("class", "svgLegend")
    .attr("transform", "translate(20,20)");
  let legend: any;

  if (type === 'stdResid') {
    const scale = d3.scaleThreshold<number, string>()
      .domain([-2.5, -1.5, -0.5, 0.5, 1.5, 2.5])
      .range(diverging as unknown as any);

    legend = d3Legend.legendColor()
      .shapeWidth(35)
      .labels(['<-2.5', '-2.5', '-1.5', '-0.5', '0.5', '1.5', '2.5', '>2.5'])
      .orient('horizontal')
      .scale(scale);

  } else if (type === 'canrate') {
    const scale = d3.scaleLinear<any>()
      .domain([0, 10])
      .range([continuousChroma.colors(2)[0], continuousChroma.colors(2)[1]]);
    //  const scale = d3.scaleThreshold<number, string>()
    // .domain([-2.5, -1.5, -0.5, 0.5, 1.5, 2.5])
    // .range(diverging as unknown as any);
    legend = d3Legend.legendColor()
      .shapeWidth(35)
      .labels(['low', '', '', '', 'high'])
      .orient('horizontal')
      .scale(scale);
  } else if (type === 'residuals') {
    const scale = d3.scaleLinear<any>()
      .domain([0, 10])
      .range([continuousChroma.colors(2)[0], continuousChroma.colors(2)[1]]);
    //  const scale = d3.scaleThreshold<number, string>()
    // .domain([-2.5, -1.5, -0.5, 0.5, 1.5, 2.5])
    // .range(diverging as unknown as any);
    legend = d3Legend.legendColor()
      .shapeWidth(35)
      .labels(['low', '', '', '', 'high'])
      .orient('horizontal')
      .scale(scale);
  } else if (type === 'mean') {
    const scale = d3.scaleLinear<any>()
      .domain([0, 10])
      .range([continuousChroma.colors(2)[0], continuousChroma.colors(2)[1]]);

    legend = d3Legend.legendColor()
      .shapeWidth(35)
      .labels(['low', '', '', '', 'high'])
      .orient('horizontal')
      .scale(scale);
  } else if (type === 'fitVal') {

  }
  svg.select(".svgLegend")
    .call(legend);

}
// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default D3Map;
