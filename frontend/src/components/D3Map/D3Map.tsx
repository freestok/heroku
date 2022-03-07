import * as d3 from 'd3';
// import * as topojson from 'topojson-server';
import * as topojson from 'topojson-client';
import { GeometryObject, Topology } from 'topojson-specification';
import React, { FC, useEffect, useRef } from 'react';
import styles from './D3Map.module.css';
import { Box, Center, Container, Flex, VStack } from "@chakra-ui/react";

interface D3MapProps { data: any }

// https://levelup.gitconnected.com/react-d3-rendering-a-map-5e006b2f4895


const width = 500;
const height = 950;
let zoomLevel = 0;
function zoomed(g: any) {
  g
    .selectAll('path') // To prevent stroke width from scaling
    .attr('transform', d3.zoomTransform);
}
const D3Map: FC<D3MapProps> = (props: D3MapProps) => {
  //////////////////////////////////////////////////////
  // REFs
  //////////////////////////////////////////////////////
  const svgRef = useRef<any>(null);
  const projRef = useRef(d3.geoMercator()
    .center([-89.8024, 44.5381])
    .scale(4000));

  //////////////////////////////////////////////////////
  // USEEFFECT AS COMPONENTDIDUPDATE WITH DEPENDENCY
  //////////////////////////////////////////////////////
  useEffect(() => {
    async function setData() {
      console.log('d3Map!', props);
      console.log(props.data)
      // const nitrate = await d3.json(props.data.nitrateFile);
      // console.log('ntirate ', nitrate);
      // const tractsFile = await d3.json(props.data.tractsFile);
      // console.log('tractsFile', tractsFile);

      const { nitrateFile, tractsFile } = props.data;
      console.log('nitrate', nitrateFile);

      // const topoFeat = topojson.feature
      const nitrateTopo = topojson.feature(nitrateFile, nitrateFile.objects.nitrate_wgs84);
      const tractsTopo = topojson.feature(tractsFile, tractsFile.objects.cancer_tracts_wgs84)
      console.log('nitrateTopo', nitrateTopo);
      // const height = svgRef.current.clientHeight
      // const width = svgRef.current.clientWidth
      // console.log('height', height);
      // console.log('width', width);

      console.log('blah');
      // projRef.current.translate([width / 2, height / 2]);
      const path = d3.geoPath().projection(projRef.current)
      // if (props.data.length) {
      // }
      // renderChart(nitrateTopo, path);
      renderChart(tractsTopo, path);

    }
    setData();
  }, [props.data])
  ////////////////////////////////////////////////////// 
  // RENDER THE CHART USING D3
  //////////////////////////////////////////////////////   
  const renderChart = (data: any, path: any) => {
    console.log('data', data);
    // console.log('path', path);
    const svg = d3.select(svgRef.current);

    const g = svg.append('g');
    g
      .selectAll('path')
      .data(data.features).enter().append('path')
      .attr('class', (d: any) => d.properties.name)
      .attr('d', path)
      .style('fill', (d: any) => '#5d80b4')
      .style("stroke-width", "1")
      .style("stroke", "black");


    const zoom = d3.zoom()
      .scaleExtent([1, 8])
      .on('zoom',  (event) => {

        g.selectAll('path').attr('transform', event.transform);
    //     g.selectAll("circle")
    //     .attr("d", path.projection(projRef.current))
    //     .attr("r", 5/event.scale);
    // g.selectAll("path")  
    //     .attr("d", path.projection(projRef.current)); 
      });
    svg.call(zoom);
  };
  ////////////////////////////////////////////////////// 
  // RENDER THE SVG
  //////////////////////////////////////////////////////
  return (
    <div className={styles.D3Map}>
      {/* <Flex h='100vh'  bg='green.100'> */}
      <svg  ref={svgRef}
        viewBox={`0 0 ${height} ${width}`}
        style={{
          height: "100%",
          marginRight: "0px",
          marginLeft: "0px",
          marginTop: "1em"
        }} />

      {/* </Flex> */}
    </div>
  )
};

export default D3Map;
