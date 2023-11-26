import { useEffect, useState } from "react";
import { Hexagon } from "react-hexgrid";
import { cubeDistance, match } from "../utils/hexGeometry";

const colourCombos = {
    red: {
        red: 'red',
        green: 'blue',
        blue: 'green'
    },
    green: {
        red: 'blue',
        green: 'green',
        blue: 'red'
    },
    blue: {
        red: 'green',
        green: 'red',
        blue: 'blue'
    }
}

export function Honeycomb ({coords, initColour, currentHex, setCurrentHex, finish, previousHex, setPreviousHex, currentColour, setCurrentColour, setLevelID}){
    const [q, r, s] = coords
    const [colour, setColour] = useState(initColour)

    useEffect(() => {
        if (previousHex && match(coords, previousHex)){
            console.log(currentHex, finish);
            if (match(currentHex, finish) && currentColour === 'green'){
                console.log('level complete!');
                setLevelID((currentLevelID)=>{
                    return currentLevelID + 1
                })
            }

            setColour(currentColour);
        }
    }, [currentHex])

    const onClick = (e) => {
        if (cubeDistance([q, r, s], currentHex) === 1){
            setColour((myCurrentColour)=>{
                const newColour = colourCombos[myCurrentColour][currentColour]
                setCurrentColour(newColour)
                return newColour;
            })
            setPreviousHex(currentHex);
            setCurrentHex(coords);
        }
    }

    return(
        <Hexagon className={`hex hex--${colour}${match(coords, currentHex)?' hex--current':''}${match(coords, finish) ? ' hex--queen' : ''}`} q={q} r={r} s={s} onClick={onClick}/>
    )
}
