export default function FoodList({foodData}){
    return (
        <>
        {
            foodData.map((food)=>{
                return(
                    <>

                        <h2>{food.title}</h2>
                        <h3>{food.id}</h3>
                        <img src={food.image} alt="" />
                    </>
                )
            })
        }
        </>
    )
}