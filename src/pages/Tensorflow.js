import React from 'react';
import '../App.css';
import { SampleConsumer } from '../sample';


export default function Tensorflow({currentData}) 
{

    return (
    <>
    <SampleConsumer>
      {
          
        (sample) => (
          <div>
           { sample.state.currentData.toString() }
          </div>
        )
      }
    </SampleConsumer>
    </>
    );
}

