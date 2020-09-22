import React from 'react'
import { BsFileText } from "react-icons/bs";
import { IoMdLeaf } from "react-icons/io";

export default function footer() {
    return (
        <div style={{paddingLeft:200, paddingRight:200, marginTop:30, marginBottom:30}}>
            <div>
                <BsFileText/>
                <small style={{marginLeft:8}}>
                    <strong>
                    English
                    </strong>
                </small>
            </div>
            <span>
                <div style={{display:"flex"}}>
                    <IoMdLeaf size={27}/>
                    <small>
                        @
                        2020
                        LifeMeter,
                        Inc.
                        <br>
                        </br>
                        Lifemeter, and the leaf logo are
                        registered trademarks of LifeMeter, Inc.
                    </small>
                </div>
            </span>
        </div>
    )
}
