
export function offsetToCubeQ (col, row){
    const q = col;
    const r = row - Math.floor(q/2)
    const s = -q - r;

    return [q, r, s];
}

export function decodeLevelStr (str){
    const columns = str.split(";");
    const hexagons = [];
    columns.forEach((col, colIndex) => {
        for (let rowIndex = 0; rowIndex < col.length; rowIndex++){
            const colour = col[rowIndex];
            if(colour !== "."){
                hexagons.push([offsetToCubeQ(colIndex, rowIndex), {g: "green", b: "blue", r: "red"}[colour]])
            }
        }
    })
    return hexagons;
}

export function match([q1, r1, s1], [q2, r2, s2]){
    return q1 === q2 && r1 === r2 && s1 === s2
}

export function cubeDistance([q1, r1, s1], [q2, r2, s2]){
    return (Math.abs(q1-q2) + Math.abs(r1-r2) + Math.abs(s1-s2)) / 2
}
