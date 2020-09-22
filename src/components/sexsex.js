import React from 'react'
import TensorflowImage from './tensorflow';
import Intro from './intro';
import SensorImage from './sensor';
import KakaoMap from './Kakaomap';

export default function sexsex() {
    return (
        <>
            <div className="m-v-25 p-h-20 f1-center f1-wrap max-width-1380">
                <TensorflowImage />
                <Intro Imgg="1"
                    heade="Data Chart Using TensorFlow"
                    li1="Charting data using TensorFlow"
                    li2="Weather prediction through deep learning algorithms"
                    li3=" Chart visualization using kibanna" />
            </div>

            <div className="m-v-25 p-h-20 f1-center f1-wrap max-width-1380">
                <Intro Imgg="2"
                    heade="Powerful Sensetivity Using PM 2008 Sensor"
                    li1="Accurate measurement through pm2008"
                    li2="Various sensors can measure not only fine dust but also other harmful substances"
                    li3="Temperature and humidity can be checked" />
                <SensorImage />

            </div>

            <div className="m-v-25 p-h-20 f1-center f1-wrap max-width-1380">
                <KakaoMap />
                <Intro Imgg="3"
                    heade="See at a glance through Kakao Map"
                    li1="You can check the air quality by region"
                    li2="Any region can be measured through Kakao Map"
                    li3="I want to have sex fuck" />

            </div>


        </>
    )
}
