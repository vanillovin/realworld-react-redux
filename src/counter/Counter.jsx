import React, { useState } from "react";
import ReactDOM  from "react-dom";

function Counter(){
    const [count, setCount] = useState(0);
    return (
      <>
        <h1>현재 : {count} 명</h1>
        <button onClick={(e)=>{setCount(old => old + 1)}}>손님 입장 +1</button>
        <button onClick={(e)=>{setCount(old => old - 1)}}>손님 퇴장 -1</button>
      </>
    )
}

export default Counter;