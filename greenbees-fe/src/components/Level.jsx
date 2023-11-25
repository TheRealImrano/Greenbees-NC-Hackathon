import React, { useState, useEffect } from 'react';
import axios from "axios";
import { HexGrid, Layout, Hexagon, GridGenerator, Hex } from 'react-hexgrid';
import { decodeLevelStr } from '../utils/hexGeometry';
import { Honeycomb } from './Honeycomb';

export function Level({levelID}){
    const [layout, setLayout] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/level/${levelID}`);
          setLayout(response.data.layout);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [levelID]);

    if (layout === null) {
      // Data is still being fetched
      return <div>Loading...</div>;
    }

    // axios.get(`localhost:5000/api/level/${levelID}`)
    // const {layout} = axios.get(`localhost:5000/api/level/${levelID}`)
    const hexagons = decodeLevelStr(layout);

    return (
      <div className="App content border">
        <h1>{`Level ${levelID}`}.</h1>
        <HexGrid width={500} height={500}>
          <Layout size={{ x: 7, y: 7 }}>
            { hexagons.map(([[q, r, s], colour], i) => <Honeycomb initColour={colour} key={i} q={q} r={r} s={s}/>) }
          </Layout>
        </HexGrid>
      </div>
    );
}