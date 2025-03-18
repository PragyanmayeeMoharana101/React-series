import FoodItem from "./FoodItem"

export default function FoodList({foodData}){
    return (
        <>
        {
            foodData.map((food)=>{
                return <FoodItem key = {food.id} food={food} />
                    
                
            })
        }
        </>
    )
}