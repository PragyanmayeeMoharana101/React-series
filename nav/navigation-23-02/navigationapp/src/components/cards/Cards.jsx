
export default function Cards({ img, name, year,rating,genre,summary,starring}){
    return (
        <>
            <img src={img} style={{width:"600px", height:"350px"}} />
            <h1>Name: {name}</h1>
            <h2>year of release: {year}</h2>
            <h2>rating: {rating}</h2>
            <h2>genre: {genre}</h2>
            <h2>description : {summary}</h2>
            <h2>starring: {starring}</h2>
        
        </>
    )
}