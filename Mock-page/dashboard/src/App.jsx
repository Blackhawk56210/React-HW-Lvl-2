import './App.css'
import NavBar from './components/navbar';
import Section from './components/section'
import SixCards from './components/six-cards';
import Footer from './components/footer'
function App() {

  return (
    <div className="w-full flex flex-col gap-3 bg-white">
      <NavBar />
      <Section 
        imageLink={"https://www.apple.com/v/home/cf/images/heroes/iphone-family/hero_iphone_family__fuz5j2v5xx6y_mediumtall.jpg"}
        sectionTitle={"iPHONE"} 
        secondHeader={"Meet the iPhone 16 Family."}
        buttons={["Learn More", "Shop iPhone"]}
        subText={"Built for Apple Intelligence"}
      />
      <Section 
        imageLink={"https://www.apple.com/v/home/cf/images/heroes/iphone-tradein-event/hero_iphone_tradein__fo4u4bki88ae_mediumtall.jpg"}
        sectionTitle={"TRADE IN"} 
        secondHeader={"Get extra credit towards a new iPhone when you trade in."}
        buttons={["get your estimate"]}
        subtext={"Now through 6.18"}
      />
      <Section 
        imageLink={"https://www.apple.com/v/home/cf/images/heroes/macbook-air/hero_macbook_air_avail__fpm99qgohx2e_mediumtall.jpg"}
        sectionTitle={"MacBook Air"} 
        secondHeader={"Sky blue color. Sky high performance with M4"}
        buttons={["Learn More", "Buy"]}
        subText={"Built for Apple Intelligence"}
      />
      <SixCards />
      <Footer />
    </div>
  )
}

export default App
