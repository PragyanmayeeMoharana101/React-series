function Cards ({name,year,seasons, rating,genre,summary, starring, creator}){
    return (
        <>
            <h1>name of series = {name}</h1>
            <h3>year of release = {year}</h3>
            <h3>number of seasons = {seasons}</h3>
            <h3>rating= {rating}</h3>
            <h3>genre= {genre}</h3>
            <h3>summary of the series = {summary}</h3>
            <h3>starring= {starring}</h3>
            <h3>creator = {creator}</h3>
        </>
    )
}
export default Cards;