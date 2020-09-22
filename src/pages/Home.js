import React from 'react';
import Banner from '../components/Banner';
import '../App.css';
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';
import MapBanner from '../components/mapBanner';
import Sex from '../components/sexsex';
import Service from '../components/Services';
import Foo from '../components/footer';

export default function Home() {


    return (
        <>
    <Hero>
        <Banner title="LifeMeter" subtitle="Check the air quality starting at $299">
        <Link to = "/mappage" className="btn-primary">
            Start
        </Link>
        </Banner>
    </Hero>    
    <MapBanner/>
    <Sex/>
    <Service/>
    <Foo/>

    </> 
    );
}