import React, { useState, useEffect } from 'react';
import axios from "axios";
import { HexGrid, Layout, Hexagon, GridGenerator, Hex } from 'react-hexgrid';
import { decodeLevelStr, offsetToCubeQ } from '../utils/hexGeometry';
import { Honeycomb } from './Honeycomb';


const fetchLevelData = (levelID) => {
  return axios.get(`https://greenbees-data.onrender.com//api/level/${levelID}`)
}

export function Level(){
    const [layout, setLayout] = useState([])
    const [finish, setFinish] = useState([4, 1, -5])
    const [previousHex, setPreviousHex] = useState(null)
    const [currentHex, setCurrentHex] = useState([0, 0, 0])
    const [path, setPath] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentColour, setCurrentColour] = useState('green')
    const [previousColour, setPreviousColour] = useState(null)
    const [levelID, setLevelID] = useState(1)

    // record colour of old hex
    // move from current hex to new hex
    // record colour of the new one
    // 


    useEffect(() => {
      setIsLoading(true)
      //
      // setLayout(decodeLevelStr("ggr.;..g.;.bb.;r...;.gbr"))
      //

      fetchLevelData(levelID)
      .then(({data}) => {
        setIsLoading(false)
        setLayout(decodeLevelStr(data.layout))
        // setPath([offsetToCubeQ(data.start)])
        // setFinish(offsetToCubeQ(data.finish))
      })
      
    }, [levelID]);

    // useEffect(() => {
    //   if (path.length){
    //     setPreviousHex(currentHex);
    //   }
    //   setPath((currentPath) => [...currentPath, currentHex])
      
    //   // if (path.length)
    // }, [currentHex])

    


    if (isLoading) {
      // Data is still being fetched
      return <div>Loading...</div>;
    }

    // axios.get(`localhost:5000/api/level/${levelID}`)
    // const {layout} = axios.get(`localhost:5000/api/level/${levelID}`)

    return (
      <div className="App content border">
        <h1>{`Level ${levelID}`}.</h1>
        <HexGrid width={500} height={500}>
          <Layout size={{ x: 7, y: 7 }}>
            { layout.map(([[q, r, s], colour], i) => <Honeycomb initColour={colour} key={i} coords={[q, r, s]} currentHex={currentHex} setCurrentHex={setCurrentHex} finish={finish} previousHex={previousHex} setPreviousHex={setPreviousHex} currentColour={currentColour} setCurrentColour={setCurrentColour} setLevelID={setLevelID} />) }
          </Layout>
        </HexGrid>
      </div>
    );
}