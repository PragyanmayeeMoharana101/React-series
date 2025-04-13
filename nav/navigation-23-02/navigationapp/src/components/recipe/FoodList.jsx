import FoodItem from "./FoodItem"

export default function FoodList({foodData, setIngrediants,setInstructions}){
    return(
        <div>
            {
                foodData.map((item)=>{
                    return <FoodItem key={item.id} item={item} setInstructions={setInstructions}  setIngrediants={setIngrediants}/>
                })
            }
        </div>
    )
}