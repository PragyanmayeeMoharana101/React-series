function Student ( {name , age, height}){


    //const {name , age, height}= props


    // const name = props.name;
    // const age = props.age;
    // const height = props.height
    return (
        <>
        <h1>your name is {name}</h1>
        <h1>your age is {age}</h1>
        <h1>your height is {height}</h1>
        </>
    )
}
export default Student;