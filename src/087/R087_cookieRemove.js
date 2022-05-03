import React, { Component } from 'react';
import cookie from 'react-cookies';

class R087_cookieRemove extends Component {
    componentDidMount() {
        const expires = new Date();
        // 쿠키 유효시간 60분
        expires.setMinutes(expires.getMinutes + 60);
        cookie.save('userid', 'react200',
            {
                path: '/',          // 서버 경로
                expires,            // 쿠키 유효시간
                // secure: true,       // https로 접근할때만 쿠키저장
                // httpOnly: true      // document.cookie로 접근하는것 막기
            }
        );
        setTimeout(function () {
            cookie.remove('userid', { path: '/' });
        }, 1000)
        setTimeout(function () {
            alert(cookie.load('userid'));
        }, 2000)
    }
    render() {
        return (
            <><h3>react-cookies Remove</h3></>
        )
    }
}

export default R087_cookieRemove;