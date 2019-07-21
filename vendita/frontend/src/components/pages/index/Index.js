import React from 'react'
//Import styles
import css from './Index.css'
//Import page components 
import Aside from '../../pageComponents/aside/Aside';
import Slider from '../../pageComponents/slider/Slider';
import Footer from '../../pageComponents/footer/Footer';


function Index() {
    return (
        <section className="main-page-content">
            <Aside />
            <Slider />
            <Footer />
        </section>
    )
}

export default Index
