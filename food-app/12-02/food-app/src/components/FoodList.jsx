import FoodItems from "./FoodItem"

export default function FoodList({foodData}){
    return(
        <div>
            {foodData.map((food)=>{
                return<FoodItems key={food.id} food={food}/>
            })}
        </div>
    )
}