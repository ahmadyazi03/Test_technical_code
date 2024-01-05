'use client';
import Image from 'next/image'
import {useCallback, useState} from "react";


export default function Home() {
    const [hasil,setHasil]=useState("");
    const [angka,setAngka]=useState("");

   const genSegitiga= async()=>{
       let s="";
       let angkaMod=angka;
       let angStr=angkaMod.toString();

       const body = {
           angStr:angStr
       };
       const response = await fetch('http://localhost:8080/api/genSegitiga/'+angStr, {
           method: 'get',
          // body: JSON.stringify(body),

       });
       const data = await response.json();

       setHasil(data.hasil);
    }
  // const genSegitiga=()=>{
  //
  // }
  const genGanjil=async()=>{
      let angkaMod=angka;
      let angStr=angkaMod.toString();
      // const body = {
      //     angStr:angStr
      // };
      const response = await fetch('http://localhost:8080/api/genGanjil/'+angStr, {
          method: 'get',
         // body: JSON.stringify(body),

      });
      const data = await response.json();
      setHasil(data.hasil);
  }

    const genPrima=async()=>{
        let angkaMod=angka;
        let angStr=angkaMod.toString();
        // const body = {
        //     angStr:angStr
        // };
        const response = await fetch('http://localhost:8080/api/genPrima/'+angStr, {
            method: 'get',
           // body: JSON.stringify(body),

        });
        const data = await response.json();
        setHasil(data.hasil);
    }

  return (
    <div style={{marginLeft:40,marginTop:80}}>
      <input onChange={(e)=>setAngka(e.target.value)} type="text" placeholder="Input Angka"/>
        <br></br>
      <button onClick={(e)=>{genSegitiga()}}>Generate Segitiga</button><button onClick={(e)=>{genGanjil()}}>Generate Bilangan Ganjil</button>
      <button onClick={(e)=>{genPrima()}}>Generate Bilangan Prima</button>
        <pre style={{wordWrap:"break-word"}}>
            {hasil}
        </pre>
        <div>

        </div>
    </div>
  )
}
