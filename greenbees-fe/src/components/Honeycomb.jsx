import { useEffect, useState } from "react";
import { Hexagon } from "react-hexgrid";
import { cubeDistance, match } from "../utils/hexGeometry";

export function Honeycomb ({coords, initColour, currentHex, setCurrentHex, finish}){
    const [q, r, s] = coords
    const [isAccessible, setIsAccessible] = useState(false)
    const [colour, setColour] = useState(initColour)

    useEffect(() => {
        setIsAccessible(cubeDistance([q, r, s], currentHex) === 1)
    }, [currentHex])

    const onClick = (e) => {
        if (isAccessible){
            setCurrentHex(coords)
        }
    }
    

    return(
        <Hexagon className={`hex hex--${colour}${match(coords, currentHex)?' hex--current':''}${match(coords, finish) ? ' hex--queen' : ''}`} q={q} r={r} s={s} onClick={onClick}/>

    )
}
