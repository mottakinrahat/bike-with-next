import Image from 'next/image'
import Slider from './Slider/page'
import About from './about/page'
import AltBike from './altBike/page'
import Bike from './bike/page'
import RentBike from './rentBike/page'
import Contact from './contact/page'
import Footer from './foooter/page'

export default function Home() {
  return (
   <main>
   <Slider></Slider>
   <About></About>
   <AltBike></AltBike>
   <RentBike></RentBike>
   <Contact></Contact>
   <Footer></Footer>
   </main>
  )
}
