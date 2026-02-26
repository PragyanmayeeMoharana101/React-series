import FoodItem from "./FoodItem"

export default function FoodList ({foodData}){
    return (
        <div>
            {foodData.map((item)=>{
                return <FoodItem key={item.id} item={item}/>
            })}
        </div>
    )
}