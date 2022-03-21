import React from 'react';
import './App.css';
import LifecycleEx from './R006_LifecycleEx';

export default function () {
    return (
        <div>
            <h1>Start React 200!</h1>
            <p>006 - 생명주기 함수 static getDerivedState</p>
            <p>FromProps(props, state) 사용하기</p>
            <LifecycleEx
                prop_value='FromApp.js'
            />
        </div>
    );
}

