giimport React from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='card-1'>
      <Cards src={"https://images.unsplash.com/photo-1712574784177-95e025a0762a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387"} title={"Spider Man 1"} pera={"This image is teken from Spider amn movio with beautfull baground"} btn={"Lern more"}/>
      <Cards src={"https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpZGVyJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"} title={"Spider Man 2"} pera={"Spider-Man is a brave superhero who protects New York City from dangerous villains and powerful enemies daily."} btn={"Lern more"}/>
      <Cards src={"https://images.unsplash.com/photo-1632715421435-1acb0ea1e0aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BpZGVyJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"} title={"Spider Man 3"} pera={"Peter Parker, an ordinary teenager, gains spider-like powers after being bitten by a radioactive spider"} btn={"Lern more"}/>
      <Cards src={"https://images.unsplash.com/photo-1635634429269-baa64e5f52b9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwaWRlciUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"}  title={"Spider Man 4"} pera={"With his incredible strength, agility, and web-shooting skills, Spider-Man swings between skyscrapers saving people in trouble"} btn={"Lern more"}/>
      <Cards src={"https://images.unsplash.com/photo-1642456074142-92f75cb84533?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNwaWRlciUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"} title={"Spider Man 5"} pera={"He always remembers his uncle’s words: “With great power comes great responsibility,” guiding his heroic journey"} btn={"Lern more"}/>
      <Cards src={"https://images.unsplash.com/photo-1635805739892-ab7b431400f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHNwaWRlciUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"} title={"Spider Man 6"} pera={"ound He always remembers his uncle’s words: “With great power comes great responsibility,” guiding his heroic journey"} btn={"Lern more"}/>
      <Cards src={"https://images.unsplash.com/photo-1651026578642-3b74b2ce1493?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHNwaWRlcm1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"} title={"Spider Man 7"} pera={"This He always remembers his uncle’s words: “With great power comes great responsibility,” guiding his heroic journey"} btn={"Lern more"}/>
      <Cards src={"https://images.unsplash.com/photo-1571781565036-d3f759be73e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHNwaWRlcm1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"} title={"Spider Man 8"} pera={"This Peter Parker, an ordinary teenager, gains spider-like powers after being bitten by a radioactive spider"} btn={"Lern more"}/>
      <Cards src={"https://images.unsplash.com/photo-1733728380971-ef322bc2d6fe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHNwaWRlcm1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"} title={"Spider Man 9"} pera={"This Peter Parker, an ordinary teenager, gains spider-like powers after being bitten by a radioactive spider"} btn={"Lern more"}/>
      </div>
      <Footer/>
    </div>
   
  )
}

export default App
