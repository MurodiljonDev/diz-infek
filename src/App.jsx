import Navbar from "./components/nav/navbar"
import Header from "./components/header/header"
import Prefer from "./components/prefer-section/prefer"
import Server from "./components/our-server/server"
import OurServer from "./components/our-server2/ourServer"
import Faq from "./components/faq/faq"
import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer"

function App() {

  return (
    <>
      <div className="App" id='main'>
        <Navbar />
        <Header/>
        <Prefer/>
        <Server/>
        <OurServer/>
        <Faq/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
