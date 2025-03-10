import Cards from "./components/Card"
function App() {

  return (
    <>
      <Cards name= "Squid Game" year={2024} seasons= "2 Seasons" rating = "A" genre = "Thriller" summary ="Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes." starring="Lee Jung-jae, Lee Byung-hun, and Yim Si-wan" creator="Hwang Dong-hyuk" />

      <Cards name= "Wednesday" year={2022} seasons= "1 Season" rating = "U/A 13+" genre = "Fantasy" summary ="Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy." starring=" Jenna Ortega, Gwendoline Christie, and Riki Lindhome" creator="Alfred Gough, Miles Millar" />
    </>
  )
}

export default App;
