import { useState } from "react";



export default function Myinput(){

    const [MyinputValue , setMyinputValue] = useState("");

    function handleinputchange(event){
        setMyinputValue(event.target.value);

        
    }

    return (
        <div>
            <label>your name</label>
            <input
            className="border-4 border-green-900"
            value={MyinputValue}
            
            onChange={ handleinputchange }  />
        </div>
    )
}