import React from 'react';
import './App.css';
import PropsBoolean from './R019_PropsBoolean';

export default function () {
    return (
        <div>
            <h1>Start React 200!</h1>
            <p>019 - props Boolean으로 사용하기</p>
            <PropsBoolean BooleanTrueFalse={false} />
            <PropsBoolean BooleanTrueFalse />
        </div>
    );
}

