const student ={
    name: "shyam",
    age: 20,
    height: 5.4
}
function Hello(){
    return (
        <>
        <h1>hello my friend {student.name}</h1>
        <p>yor are {student.age} years old</p>
        <p>you are {student.height} feet tall</p>
        </>
    )
}
export default Hello;