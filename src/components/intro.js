import React from 'react'
import { SiTensorflow } from "react-icons/si";
import { BiBarChart } from "react-icons/bi";
import { BsMap } from "react-icons/bs";


export default function intro({ Imgg, heade, li1, li2, li3 }) {

    if (Imgg === 1) {
        return (

            <div className="alldiv m-v-25 p-h-20 f1-wrap p-x-20" style={{ float: "left" }}>
                <span className="intro-span">
                    <SiTensorflow size={35} style={{ textAlign: "center" }} />
                </span>
                <h3 className="intro-h2">{heade}</h3>
                <ul style={{ paddingLeft: 0 }}>
                    <li className="intro-li">
                        {li1}
                    </li>
                    <li className="intro-li">
                        {li2}
                    </li>
                    <li className="intro-li">
                        {li3}
                    </li>
                </ul>
            </div>
        )
    }

    else if (Imgg === 2) {
        return (

            <div className="alldiv m-v-25 p-h-20 f1-wrap p-x-20" style={{ float: "left" }}>
                <span className="intro-span">
                    <BiBarChart size={35} style={{ textAlign: "center" }} />
                </span>
                <h3 className="intro-h2">{heade}</h3>
                <ul style={{ paddingLeft: 0 }}>
                    <li className="intro-li">
                        {li1}
                    </li>
                    <li className="intro-li">
                        {li2}
                    </li>
                    <li className="intro-li">
                        {li3}
                    </li>
                </ul>
            </div>
        )


    }

    else {
        return (
            <div className="alldiv m-v-25 p-h-20 f1-wrap p-x-20" style={{ float: "left" }}>
                <span className="intro-span">
                    <BsMap size={35} style={{ textAlign: "center" }} />
                </span>
                <h3 className="intro-h2">{heade}</h3>
                <ul style={{ paddingLeft: 0 }}>
                    <li className="intro-li">
                        {li1}
                    </li>
                    <li className="intro-li">
                        {li2}
                    </li>
                    <li className="intro-li">
                        {li3}
                    </li>
                </ul>
            </div>
        )
    }


}
