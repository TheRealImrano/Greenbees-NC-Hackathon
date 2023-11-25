
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
