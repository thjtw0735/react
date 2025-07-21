import { useState } from "react"

function Toy ({num, language, booleanY}){

    // const language = "한글";
    // const booleanY = true;
    const [number, setCount] = useState(0);
    const setNum = ()=>{
        setCount(p => p+1)
    }
    return (
    <>
    <h2>{num}</h2>
    <h2>{number}</h2>
    <button onClick={() => setNum()}>add count</button>
    <br></br>
    {language}
    {`${language}`}
    {String(booleanY)}
    </> 
    )
}

export default Toy 