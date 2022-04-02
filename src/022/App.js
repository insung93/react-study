import React from 'react';
import './App.css';
import PropsDefault from './R022_PropsDefault';

export default function () {
    return (
        <div>
            <h1>Start React 200!</h1>
            <p>022 - props를 기본 값으로 사용하기</p>
            <PropsDefault ReactNumber={200} />
        </div>
    );
}