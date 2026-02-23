export default function FoodItem ({item}){
    return(
        <div className="cards">
            <img src={item.image} className="image"/>
            <h2>{item.title}</h2><br/>
            <button className="viewr">VIEW RECIPE</button>
            
        </div>
        
    )
}