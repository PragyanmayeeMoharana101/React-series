const name = "ram";
const age = 20;
const height = 5.4
const hobbies = ["reading books", "playing music", "watching tv"]
function message (){
  return "good luck for react career"
}
function Hello(){
    return (
      <>
       <h1>hello my friend {name}</h1>
       <p>you are {age} years old</p>
       <p>you are {height} feet tall</p>
       <p>your hobbies are-
          {hobbies.map((hobby)=>{
           return <span>{hobby} , </span>
          })}
       </p>
       <p>total rating ={10+20}</p>
       <h2>{message()}</h2>
       </>
    )
  }
  export default Hello;