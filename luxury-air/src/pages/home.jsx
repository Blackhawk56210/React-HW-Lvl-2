import Banner from '../components/banner';
import New from '../components/newInventory'
import Bio from '../components/companybio'
import CompanySection from '../components/contact'

export default function Home() {
  return (
    <div className="p-15 pt-20">
        <Banner />
        <New />
        <Bio />
        <CompanySection />
    </div>
  )
}
