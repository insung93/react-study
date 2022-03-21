import React from 'react';
import './App.css';
import LifecycleEx from './R008_LifecycleEx';

export default function () {
    return (
        <div>
            <h1>Start React 200!</h1>
            <p>008 - 생명주기 함수 shouldComponentUpdate() 사용하기</p>
            <LifecycleEx
                prop_value='FromApp.js'
            />
        </div>
    );
}
 
