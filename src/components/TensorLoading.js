import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';


export default function TensorLoading() {
    const [loading, setloading] = useState(true);
    const [currentData, setData] = useState(0);

    useEffect(
        function () {
            const x = [28, 23, 25, 25, 26, 25, 27, 28, 32, 30, 35, 32, 34, 30, 29];
            const y = [23, 25, 25, 26, 25, 27, 28, 32, 30, 35, 32, 34, 30, 29, 26];
            const preVal = [38];
            var res;

            const model = tf.sequential();
            model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
            model.compile({ loss: 'meanSquaredError', optimizer: tf.train.sgd(0.001) });

            const xs = tf.tensor2d(x, [15, 1]);
            const ys = tf.tensor2d(y, [15, 1]);

            model.fit(xs, ys, { epochs: 750 }).then(() => {
                tf.round(model.predict(tf.tensor2d(preVal, [1, 1]))).print();
                res = tf.round(model.predict(tf.tensor2d(preVal, [1, 1])));
                res = res.toString();
                res = res.substring(14, 16);

                if (res <= 30)
                    res = "내일 예측: 좋음";
                else if (res >= 31 && res <= 80)
                    res = "내일 예측: 보통";
                else if (res >= 81 && res <= 150)
                    res = "내일 예측: 나쁨";
                else
                    res = "내일 예측: 매우나쁨";
                setData(res);
                setloading(false);
            });
        })

    if (loading) {
        return (
            <div className="loading">
            </div>
        )
    }

    else {
        return (
        <div className="result">
            { currentData.toString() }
        </div>
        )
     }
}