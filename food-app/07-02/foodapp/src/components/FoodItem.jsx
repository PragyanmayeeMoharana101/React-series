export default function FoodItem ({food}){
    return (
        <>
            <h2>{food.title}</h2>
            <h3>{food.id}</h3>
            <img src={food.image} alt="" />
        </>
    )
}