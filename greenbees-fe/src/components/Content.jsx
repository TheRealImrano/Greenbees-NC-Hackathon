import React, { Component } from 'react';
import { HexGrid, Layout, Hexagon, GridGenerator, Hex } from 'react-hexgrid';
import { decodeLevelStr } from '../utils/hexGeometry';
import { Honeycomb } from './Honeycomb';

// export function Content (){
//     return(
//         <>
//             <section className="border content">
//                 hiiii
//             </section>
//         </>
//     )
// }

class Content extends Component {
    render() {
        const levelStr = "ggr.;..g.;.bb.;r...;.gbr";
        const hexagons = decodeLevelStr(levelStr);
        // const hexagons = coords.map(([q, r, s]) => new Hex(q, r, s))
    
        return (
          <div className="App content border">
            <h1>Basic example of HexGrid usage.</h1>
            <HexGrid width={500} height={500}>
              <Layout size={{ x: 7, y: 7 }}>
                { hexagons.map(([[q, r, s], colour], i) => <Honeycomb initColour={colour} key={i} q={q} r={r} s={s} />) }
              </Layout>
            </HexGrid>
          </div>
        );
      }
}

export default Content;