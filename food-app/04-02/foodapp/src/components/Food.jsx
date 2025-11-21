export default function Food(){

    const food = [
        {
            "id": 715769,
            "title": "Broccolini Quinoa Pilaf",
            "image": "https://img.spoonacular.com/recipes/715769-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 659109,
            "title": "Salmon Quinoa Risotto",
            "image": "https://img.spoonacular.com/recipes/659109-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 648279,
            "title": "Italian Tuna Pasta",
            "image": "https://img.spoonacular.com/recipes/648279-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 1095745,
            "title": "Mushroom Hummus Crostini",
            "image": "https://img.spoonacular.com/recipes/1095745-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 658753,
            "title": "Roma Tomato Bruschetta",
            "image": "https://img.spoonacular.com/recipes/658753-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 641893,
            "title": "Easy Cheesy Pizza Casserole",
            "image": "https://img.spoonacular.com/recipes/641893-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 716300,
            "title": "Plantain Pizza",
            "image": "https://img.spoonacular.com/recipes/716300-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 664737,
            "title": "Veggie Lasagna Rolls with Peppery Pecorino Marinara",
            "image": "https://img.spoonacular.com/recipes/664737-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 664565,
            "title": "Vegetable Minestrone Soup",
            "image": "https://img.spoonacular.com/recipes/664565-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 654125,
            "title": "Osso Buco",
            "image": "https://img.spoonacular.com/recipes/654125-312x231.jpg",
            "imageType": "jpg"
        }
    ]
    return(
        <>
           {
            food.map((item)=>{
                return(
                    <>
                         <p>id: {item.id}</p>
                         <p>title: {item.title}</p>
                         <img src={item.image}  />
                        
                    </>
                )
            })
           }
        </>
    )
}