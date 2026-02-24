import FoodItem from "./FoodItem"

export default function FoodList ({foodData}){
    return (
        <>
            {
                foodData.map((item)=>{
                    return <FoodItem key={item.id} item={item}/>
                })
            }
        </>
    )
}