import Banner from '@/component/Banner'
import Features from '@/component/Features'
import Footer from '@/component/Footer'
import Category from '@/component/category'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Banner />
      <Category />
      <Features/>
      <Footer />
    </div>
  )
}
