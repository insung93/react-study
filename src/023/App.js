import React from 'react';
import './App.css';
import PropsNode from './R023_PropsNode';

export default function () {
    return (
        <div>
            <h1>Start React 200!</h1>
            <p>023 - props로 node 전달하기</p>
            <PropsNode>
                <span>node from App.js</span>
            </PropsNode>
        </div>
    );
}