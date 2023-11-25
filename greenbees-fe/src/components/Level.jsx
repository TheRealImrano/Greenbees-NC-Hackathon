import axios from "axios";
import { HexGrid, Layout, Hexagon, GridGenerator, Hex } from 'react-hexgrid';
import { decodeLevelStr } from '../utils/hexGeometry';
import { Honeycomb } from './Honeycomb';

export async function Level({levelID}){
    console.log('Trying to render level!')
    await axios.get(`localhost:5000/api/level/${levelID}`)
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