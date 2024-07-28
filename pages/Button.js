import { useState } from "react";

let name = "fadi";

export default function button (){
    console.log("render")
    const [name , setName] = useState("fadi2");

    function buttonClicked() {
        if(name == "fadi"){
            setName("fadi2");
        }else{
            setName("fadi");
        }
    }

    return(
        <div>
            <button onClick={buttonClicked}>Click me</button>
            <h1>{name}</h1>
        </div>
    )
}

