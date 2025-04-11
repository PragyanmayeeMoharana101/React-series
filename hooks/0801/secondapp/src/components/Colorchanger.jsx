import { useState } from "react";

export default function Colorchanger() {
  const [color, setColor] = useState("white");
  const [text, setText] = useState("CLICK ME!!!!") 
  const [themebg, setThemebg]= useState("");
  const [themetext, setThemetext] = useState("black")
  
  
  function reset (){
    setColor("white");
  }
  function textchanger(){
    if(text === "CLICK ME!!!!"){
        setText("DON'T CLICK ME!!!")
    }else{
        setText("CLICK ME!!!!")
    }
  }
  function light (){
    setThemebg("white");
    setThemetext("black")
  }
  function dark (){
    setThemebg("black");
    setThemetext("white")
  }
  return (
    
     <div style={{backgroundColor:themebg, color:themetext,margin:"-10px", width:"101%", height:"100vh"}}>
        {
            (themetext==="black" ? <button style={{marginLeft:"740px" , marginTop:"20px", padding:"10px"}} onClick={dark}>DARK</button>: <button style={{marginLeft:"740px" ,marginTop:"20px", padding:"10px"}} onClick={light}>LIGHT</button>)
        }
    <div style= {{ textAlign:"center"}}>
    <h1>Background Color Changer</h1>

      <div
        style={{ width: "400px", margin:"auto", height: "250px",border:"1px solid black",marginBottom: "10px", backgroundColor: color }} onClick={reset}
      ></div>

      <button style={{ margin: "5px", backgroundColor:"red", color:"white", borderRadius: "50%", padding:"20px"}} onClick={()=>{
          setColor("red");
        }
      }>

      </button>

      <button style={{ margin: "5px", backgroundColor:"yellow", color:"white", borderRadius: "50%", padding:"20px"}} 
      onClick={()=>{
        setColor("yellow");
      }}></button>

      <button style={{ margin: "5px", backgroundColor:"blue", color:"white", borderRadius: "50%" , padding:"20px"}} onClick={()=>{
        setColor("blue");
      }}></button>

      <button style={{  margin: "5px", backgroundColor:"brown", color:"white", borderRadius: "50%", padding:"20px" }} onClick={()=>{
        setColor("brown");
      }}></button>

      <button style={{ margin: "5px", backgroundColor:"green", color:"white", borderRadius: "50%" , padding:"20px"}} onClick={()=>{
        setColor("green");
      }}></button>

      <button style={{  margin: "5px", backgroundColor:"pink", color:"white", borderRadius: "50%", padding:"20px" }}onClick={()=>{
        setColor("pink");
      }}></button><br/>

      <button onClick={textchanger} style= {{margin:"20px", padding:"20px"}}>{text}</button><br/>

      
    </div>

    </div>
  );
}