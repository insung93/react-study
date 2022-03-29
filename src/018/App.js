import React from 'react';
import './App.css';
import PropsDatatype from './R018_PropsDatatype';

export default function () {
    return (
        <div>
            <h1>Start React 200!</h1>
            <p>018 - props 자료형 사용하기</p>
            <PropsDatatype
                String="react"
                Number={200}
                Boolean={1 == 1}
                Array={[0, 1, 8]}
                ObjectJson={{ react: "리액트", twohundred: "200" }}
                Function={console.log("FunctionProps: function!")} />
        </div>
    );
}

