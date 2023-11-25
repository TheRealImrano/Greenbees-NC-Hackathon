import { useState } from "react";
import { Hexagon } from "react-hexgrid";

export function Honeycomb ({q, r, s, initColour}){
    const [colour, setColour] = useState(initColour)

    return(
        <Hexagon className={`hex hex--${colour}`} q={q} r={r} s={s}/>
    )
}