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

export function Honeycomb ({coords, initColour, currentHex, setCurrentHex, finish, previousColourSetter, setPreviousColourSetter}){
    const [q, r, s] = coords
    const [colour, setColour] = useState(initColour)

    useEffect(() => {
        if (match(coords, currentHex) && previousColourSetter){
            let newColour = colour
            // previousColourSetter((previousColour) => {
            //     newColour = colourCombos[previousColour][colour]
                
            //     return newColour
            // })
            // setColour(() => {
            //     console.log(`Setting colour of ${coords} to ${newColour}.`)
            // })
        }
    }, [currentHex])

    const onClick = (e) => {
        if (cubeDistance([q, r, s], currentHex) === 1){
            // setPreviousColourSetter(setColour)
            setCurrentHex(coords)
        }
    }
    

    return(
        <Hexagon className={`hex hex--${colour}${match(coords, currentHex)?' hex--current':''}${match(coords, finish) ? ' hex--queen' : ''}`} q={q} r={r} s={s} onClick={onClick}/>

    )
}
