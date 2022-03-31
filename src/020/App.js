import React from 'react';
import './App.css';
import PropsObjVal from './R020_PropsObjVal';

export default function () {
    return (
        <div>
            <h1>Start React 200!</h1>
            <p>020 - props 객체형으로 사용하기</p>
            <PropsObjVal ObjectJson={{ react: "리액트", twohundred: "200" }} />
        </div>
    );
}