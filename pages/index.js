import Navbar from "../components/Navbar/navbar"

// Nextjs toma el index.js como la página inicial
// sin necesidad de indicarlo en alguna parte
// de la aplicación
const HomePage = () => {
 return (
  <div>
   <Navbar/>
   <h1>Welcome to Next.js From Nicaragua!</h1>
  </div>
 )
}

export default HomePage