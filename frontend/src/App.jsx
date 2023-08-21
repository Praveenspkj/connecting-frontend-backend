import { useState } from "react";




function App() {
 
  const [namee,setNamee]=useState({});

 const func=async()=>{
     const response=await fetch("http://localhost:3005/name",{
      method: 'GET',
     })

     const data=await response.json();

     console.log(response)
     console.log(data)


     setNamee(data)
 }

  return (
    <>
      <h1>connecting frontend with backend</h1>
      <button onClick={func}>getName</button>
      {
        namee?<h1>{namee.name}</h1>:<h1>NO NAME GIVEN</h1>
      }
    </>
  )
}

export default App
