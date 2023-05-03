import React from 'react'
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Card from '../Card/card';
import '../../App';
function Home() {
  return (
    <>
        <Header/>
        <h1 style={{marginTop:70}}></h1>
        <div >

        <Card />
        <Card />
       </div>
        
        <Footer/>
    </>
  )
}

export default Home