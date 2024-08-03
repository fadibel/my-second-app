import Image from "next/image";
import { Inter } from "next/font/google";
import Button from './Button'
import Myinput from "./Myinput"
import Myform from "./Myform"
import Objectchalange from "./objectchalange"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    

    <div>
      <Button/>
      {/* <Myinput /> */}
      <br/>
      <br/>
      <Myform />

      <br/>
      <br/>
      <Objectchalange />



    </div>

    
    
  );
}
