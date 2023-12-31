import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import ProductCard from '@/components/ProductCard'

export default function Home() {
  return (
    <main>
      <Banner/>
      <div style={{margin:"20px", display: "flex", flexDirection: "row",  flexWrap: "wrap", 
      justifyContent: "space-around", alignContent: "space-around"}}>
      <ProductCard name="Chulalongkorn Hospital" src="/img/chula.jpg"/>
      <ProductCard name="Rajavithi Hospital" src="/img/rajavithi.jpg"/>
      <ProductCard name="Thammasat University Hospital" src="/img/thammasat.jpg"/>
      </div>
    </main>
  )
}