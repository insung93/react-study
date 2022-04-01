import React from 'react';
import './App.css';
import PropsRequired from './R021_PropsRequired';

export default function () {
    return (
        <div>
            <h1>Start React 200!</h1>
            <p>021 - props를 필수 값으로 사용하기</p>
            <PropsRequired ReactNumber={200} />
        </div>
    );
}