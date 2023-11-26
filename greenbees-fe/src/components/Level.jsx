import React, { useState, useEffect } from 'react';
import axios from "axios";
import { HexGrid, Layout } from 'react-hexgrid';
import { decodeLevelStr, offsetToCubeQ } from '../utils/hexGeometry';
import { Honeycomb } from './Honeycomb';


const fetchLevelData = (levelID) => {
  return axios.get(`https://greenbees-data.onrender.com//api/level/${levelID}`)
}

export function Level(){
    const [layout, setLayout] = useState([])
    const [finish, setFinish] = useState([])
    const [previousHex, setPreviousHex] = useState(null)
    const [currentHex, setCurrentHex] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentColour, setCurrentColour] = useState('green')
    const [levelID, setLevelID] = useState(1)

    useEffect(() => {

      if (levelID >= 5){
        return;
      }

      setIsLoading(true)

      fetchLevelData(levelID)
      .then(({data}) => {
        setIsLoading(false)
        setLayout(decodeLevelStr(data.layout))
        setCurrentHex(offsetToCubeQ(...data.start))
        setFinish(offsetToCubeQ(...data.finish))
      })
      
    }, [levelID]);

    if (isLoading) {
      return <div><i>Loading...</i></div>;
    }

    if (levelID >= 5){
      return (
        <h1>
          That's it for now, more levels coming soon! ;)
        </h1>
      )
    }

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