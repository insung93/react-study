# React Study

## 실행
```bash
$ npm run debug src=[001|002|003|...]
```
---
### 001 - .jsx에 html 적용하기
---
### 002 - .jsx에 css 적용하기
---
### 003 -  Component 사용하기
- Component란
  - 특정 코드 뭉치를 다른 부분에 이식하거나 재사용하기 위해 사용하는 코드 블록 단위
  - 파일 단위로 작성한 후 필요한 위치에서 임포트해 사용할 수 있다.
---
### 004 - 생명주기 함수 render() 사용하기
- 생명주기란
  - component의 생성, 변경, 소멸 과정
---
### 005 - 생명주기 함수 constructor(props) 사용하기
- constructor(props)
  - 생명주기 함수 중 가장 먼저 실행
  - 처음 한번만 호출
  - component 내부에서 사용되는 변수(state)를 선언하고 부모 객체에서 전달받은 변수(props)를 초기화 할 때 사용
  - super() 함수는 가장 위에 호출
---
### 006 - 생명주기 함수 static getDerivedState FormProps(props, state) 사용하기
- getDerivedStateFromProps(props, state) 함수는 constructor() 함수 다음으로 실행
- 컴포넌트가 새로운 props를 받게 됐을 때 state를 변경해준다.
- App.js 에서 전달한 prop_value라는 변수를 props.prop_value로 접근해서 값을 가져올 수 있다.
---
### 007 - 생명주기 함수 componentDidMount() 사용하기
- componentDidMount() 함수는 작성한 함수들 중 가장 마지막으로 실행
- render() 함수가 return 되는 html 형식의 코드를 화면에 그려준 후 실행
- 화면이 모두 그려진 후에 실행돼야 하는 이벤트 처리, 초기화 등 가장 많이 활용하는 함수
---
### 008 - 생명주기 함수 shouldComponentUpdate() 사용하기
- shouldComponentUpdate() 함수는 component의 '변경' 과정에 속한다.
  - ex) props, stete의 변경
- componentDidMount() 함수는 '생성' 단계의 생명주기 함수 중 가장 마지막으로 실행
- setState() 함수는 변수의 선언과 초기화를 동시에 실행
```javascript
    this.setState({tmp_state2 : true});
```
- state의 변경이 발생했기 때문에 '변경' 단계의 생명주기 함수 shouldComponentUpdate()가 실행
- shouldComponentUpdate()는 boolean 유형의 데이터를 반환하는데 return 값이 true 일 경우에 render() 함수를 한번 더 호출
---
### 009 - 템플릿 문자열 사용하기
- 백틱(`)으로 전체 문자열과 변수를 묶어 사용
- 변수는 ${ 변수명 } 형태로 넣고 코드상에서 줄바꿈을 하면 개행 문자 없이도 사용 가능
- startsWith()는 변수 앞에서부터
- endsWith()는 변수 뒤에서부터
- includes()는 위치에 상관없이 문자열이 있는지 찾는다.
- 있으면 true, 없으면 false 반환
---
### 010 - var, let, const 사용하기
- var는 유연한 방식으로 변수를 재선언, 재할당 할 수 있었으나, 변수의 사용 범위가 불확실해지거나 의도하지 않은 변숫값 변경이 발생할 수 있다.
- let 변수는 재선언을 허용하지 않기 때문에 에러 페이지 표시
```javascriipt
        // var letName = '200';    
        // Parsing error : Identifier 'letName' has already been declared
```
---
### 011 - 전개 연산자 사용하기
- ES6에서는 전개 연산자 (...)을 배열명 앞에 붙여 여러 개의 배열을 합칠 수 있다.
- ES6에서는 전개 연산자 (...)을 객체명 앞에 붙여 여러 개의 객체를 합칠 수 있다.
- 객체의 키와 값을 추출해 키와 동일한 명칭의 개별 변수에 넣는다. 나머지는 마지막에 전개 연산자 처리된 ...others 변수에 넣는다.
---
### 012 - class 사용하기
- 기존 Es5 자바스크립트에서는 객체를 구현하기 위해 prototype을 사용
- 객체는 상속을 통해 코드를 재사용 할 수 있음
- ES6에서 등장한 class는 prototype과 같은 개념
---
### 013 - 화살표 함수 사용하기
- 'function' 대신 '=>' 문자열을 사용하며 'return' 문자열 생략 가능
- 화살표 함수에서는 콜백함수에서 this를 bind 해야하는 문제도 발생하지 않는다.
---
### 014 - forEach 함수 사용하기
- 배열 함수 forEach는 for문에서 사용하던 순번과 배열의 크기 변수를 사용하지 않음
- 배열의 처음부터 마지막 순번까지 모두 작업하는 경우 forEach()문을 사용하는 것이 간편
- 특정 순번에서만 배열 값을 사용하거나 변경해야하는 상황이면 for문을 사용
---
### 015 - map() 함수 사용하기
- 배열 함수 map은 forEach() 와 마찬가지로 for문에서 사용하던 순번과 배열의 크기 변수를 사용하지 않는다.
- 차이점은 map()은 forEach() 와 달리 return을 사용해 반환 값을 받을 수 있다.
---
### 016 - jQuery 사용하기
- 이벤트 처리, 애니메이션 등 자바스크립트의 기능을 간단하고 빠르게 구현할 수 있도록 지원해준다.
---
### 017 - props 사용하기
- props는 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달할 때 사용
- props를 전달받은 자식 컴포넌트에서는 데이터를 수정할수 없다.
- 데이터를 수정하기 위해서는 컴포넌트 내부에서만 사용하는 변수에 값을 넣어 사용해야 한다.
---
### 018 - props 자료형 사용하기
- 자식 컴포넌트에서 props에 대한 자료형을 선언해 놓으면 부모 컴포넌트에서 넘어오는 props 변수들의 자료형과 비교한다.
- 이때 자료형이 일치하지 않는다면, 경고 메시지로 알려주기 때문에 잘못된 데이터를 확인할 수 있다.
---
### 019 - props Boolean으로 사용하기
- Boolean으로 props값을 하위 컴포넌트에 전달할 경우 true나 false 중 하나를 할당
- 값을 할당하지 않으면true가 기본값으로 할당
---
### 020 - props 객체형으로 사용하기
- props값을 하위 컴포넌트에 전달할 경우 자료형을 object로 선언한다
- 값을 할당하지 않으면true가 기본값으로 할당
---
### 021 - props를 필수 값으로 사용하기
- props의 자료형을 선언할 때 prop-types를 사용한다.
- isRequired를 조건으로 추가하면 변숫값이 없는 경우 경고 메시지가 발생할 수 있다.
---
### 022 - props를 기본 값으로 사용하기
- props의 기본값은 부모 컴포넌트에서 값이 넘어 오지 않았을 때 사용
- defaultProps라는 문법 사용
---
### 023 - props로 node 전달하기
- props를 하위 컴포넌트 태그 안쪽에 선언해 전달하는 것 이외에도 하위 컴포넌트 태그 사이에 작성된 node를 전달할 수 있다.
---
### 024 - state 사용하기
- props를 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 때 사용했다면, state는 하나의 컴포넌트 안에서 전역 변수처럼 사용한다.
---
### 025 - setState() 함수 사용하기
- this.state.변수명 = value 와 같이 state를 직접 변경하면 render() 함수를 호출하지 않으므로 화면에 보이는 state 값은 바뀌기 전 상태로 남게 된다.
- setState() 함수로 state를 변경해야 render() 함수를 호출해 변경된 값을 화면에 보여줄 수 있다.
---
### 026 - state를 직접 변경한 후 forceUpdate() 함수 사용하기
- this.state.변수명 = value 와 같이 state를 직접 변경하면 render() 함수를 호출하지 않으므로 화면에 보이는 state 값은 바뀌기 전 상태로 남게 된다.
- 이 때, forceUpdate() 함수로 화면을 새로 고침하면, render() 함수를 호출해 변경된 값을 화면에 보여줄 수 있다.
---
### 027 - Component 사용하기(class형 컴포넌트)
- class형 컴포넌트에는 Component와 pureComponent가 있다.
- 두 컴포넌트 모두 props와 state의 변경에 따라 render() 함수를 호출하는데 변경에 대한 기준이 다르다.
- Component에서는 비교 대상이 완전히 동일하지 않으면 변경이 발생했다고 본다.
---
### 028 - PureComponent 사용하기(class형 컴포넌트)
- class형 컴포넌트에는 Component와 pureComponent가 있다.
- 두 컴포넌트 모두 props와 state의 변경에 따라 render() 함수를 호출하는데 변경에 대한 기준이 다르다.
- PureComponent에서는 비교 대상의 값을 비교해 동일하지 않으면 변경이 발생했다고 본다.
- 불필요한 render() 함수 실행을 줄이면 페이지 성능을 향상 시킬 수 있다.
---
### 029 - shallow-equal 사용하기(class형 컴포넌트)
- shallow-equal 패키지는 PureComponent에서 state 값의 변경을 비교하는 것과 동일한 기능을 하는 함수를 제공
- shallowEqualArrays() 함수를 사용하면 문자열과 배열은 값만 비교
- 객체는 PureComponent와 동일하게 참조 값을 비교
```bash
    npm install shallow-equal
```
---
### 030 - 함수형 컴포넌트 사용하기
- 함수형 컴포넌트는 클래스형 컴포넌트와 달리, state가 없고 생명주기 함수를 사용할 수 없다.
- 상위 컴포넌트에서 props와 context를 파라미터로 전달받아 사용하고 render() 함수가 없으므로 return만 사용해 화면을 그려준다.
---
### 031 - hook 사용하기
- 함수형 컴포넌트에서 클래스형 컴포넌트와 같이 state와 생명주기 함수와 같은 기능을 사용하기 위해 hook을 이용한다.
- 대표적인 hook 함수 : useState(), useEffect()
---
### 032 - Fragments 사용하기
- 컴포넌트 단위로  element를 return 할 때 하난의 <html> 태그로 전체를 감싸지 않으면 에러가 발생한다.
- 이때 <Fragments> 태그로 감싸면 불필요한 <html> 태그를 추가하지 않고 사용할 수 있다.
---
### 033 - map() 으로 element 반환하기
- 반복해서 출력해야 하는 element들을 배열에 넣어두고 map() 함수로 순서대로 나열해 컴포넌트를 return 할 수 있다.
---
### 034 - reactstrap Alerts 사용하기
- bootstrap을 react에서 사용할 수 있도록 패키지로 만든 것이 reactstrap이다.
- css는 포함하고 있지 않기 때문에 bootstrap도 설치
- 적용이 안됨.....
---

...............................
~ reactstrap
...............................

---
### 056 - sweetalert2 Basic 사용하기
- sweetalert2 패키지는 다양한 디자인과 기능의 알림 창을 지원한다.
- 기본 자바스크립트 alert()와 같이 사용자에게 필요한 정보를 알림 창으로 표시한다.
```Shell
npm install sweetalert2
```
---
### 057 - sweetalert2 position 사용하기
- sweetalert2 패키지는 알림 창의 표시 방식과 구성 요소들을 원하는 혀앹로 변경할 수 있는 옵션을 제공
- 옵션 중 position은 알림 창의 표시 위치를 결정
---
### 058 - sweetalert2 confirm 사용하기
- 웹 사이트에 삭제 기능을 구현할 때 사용자의 실수로 데이터가 삭제될 수 있다.
- 이런 상황 방지하기 위해 실제 삭제 작업을 실행하기 전에 다시 한번 확인하는 알림 창을 표시한다.
---
### 059 - fetch get 호출
- 웹에서는 클라이언트와 서버가 http 프로토콜을 통해 요청과 응답을 주고받는다.
- http에서 사용하는 방식은 여러 가지가 있지만, GET과 POST를 많이 사용한다.
- GET은 데이터를 조회해 가져와 사용하는 것이다.
- GET 방식은 url 뒤에 쿼리스트링으로 필요한 데이터를 전달한다.
- fetch 를 사용하면 비동기 통신을 쉽게 구현할 수 있다.
- 비동기 통신이란, 먼저 시작한 작업의 완료 여부와 상관없이 다음 작업을 실행하는 것이다.
- fetch를 사용해서 get 방식으로 url을 호출해 데이터를 가져온다.
- 가져온 데이터를 response라는 변수에 할당하고 fetch 함수에 별도의 http 메서드 설정이 없다면, get 방식으로 호출한다.
```
ReferenceError: regeneratorRuntime is not defined

regeratorRuntime이 async/await 문법을 번역하도록 했는데 해당 regenerator를 제공하지 않아서 발생한 에러

babel 7.4.0부터는 core-js/stable(ECMAScript 기능들의 polyfill 제공)과 regenerator-runtime/runtime (transpiled generator functions 사용을 위해 필요) 직접 포함하면서 @babel/polyfill이 deprecated되었다.
따라서 @babel/polyfill이 아닌 @babel/runtime과 @babel/plugin-transform-runtime을 설치해 regenerator-runtime을 추가하는 방식으로 해결했다.

다음의 커맨드로 설치해주고

> npm install --save-dev @babel/plugin-transform-runtime
> npm install --save @babel/runtime

babel 설정에 plugin을 등록해주자.

{
  "plugins": ["@babel/plugin-transform-runtime"]
}

출처
https://velog.io/@haebin/React-regeneratorRuntime-is-not-defined-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0
```
---
### 060 - fetch post 호출하기
- GET이 데이터를 조회해 가져와 사용하는 용도로 사용한다면, POST는 서버의 상태나 데이터를 변경하는 등의 수행 작업에 사용된다.
- POST는 http body에 데이터를 넣어 전달하는데, url 뒤에 파라미터를 표시하지 않고 사용할 수 있다는 장점이 있다.
---
### 061 - axios get 사용하기
- axios도 fetch 와 마찬가지로 비동기 통신을 지원
- axios는 별도로 설치한 후 import 해서 사용해야 한다.
```
npm install axios
```
---
### 062 - axios post 사용하기
- axios로 post 방식의 호출을 하는 문법은 get 방식으로 호출했을 때와 거의 동일하다.
- 다른 점은 post 함수의 파라미터로 json과 같은 형태의 데이터를 넣고 http body에 담아 url을 호출할 수 있다는 것이다.
---
### 063 - 콜백 함수 사용하기
- 자바스크립트는 비동기적으로 동작하기 때문에 먼저 실행된 작업이 끝나지 않았더라도 다음 작업이 시작될 수 있다.
- 콜백 함수를 이용하면 특정 코드에 순서를 정해 원하는 시점에 실행할 수 있다.
- 콜백 함수를 여러번 사용할수록 코드가 더 지저분해진다.
---
### 064 - Promise then 사용
- Promise는 콜백 함수 와 같이 비동기적으로 동작하는 코드를 동기적으로 구현할 때 사용한다.
- Promise를 사용하면 콜백 함수와 달리, 코드 가독성을 높일 우 있고 예외 처리도 쉽게 할 수 있다.
---
### 065 Promise catch 사용하기
- Promise의 상태와 대기, 이행, 거부 중 거부 상태가 됐을 때 catch 함수를 실행한다.
- 대기 상태의 Promise에 에러가 발생해 이행으로 상태 변화를 하지 못하는 경우다
---
### 066 - click 이벤트 사용하기
- react에서는 html과 달리 이벤트에 camelCase를 사용
- onClick 이벤트는 특정 element가 클릭 되었을 때 정의된 함수를 호출하는 방식으로 사용한다.
---
### 067 - change 이벤트 사용하기
- react에서는 onChange 이벤트도 camelCase 형식을 사용
- onChange 이벤트는 특정 element에 변화가 생겼을 때 저의된 함수를 호출하는 방식으로 사용한다.
---
### 068 - mousemove 이벤트 사용하기
- onMouseMove 이벤트는 특정 tag 영역 안에서 마우스 커서가 움직일 때 발생한다.
---
### 069 - mouseover 이벤트 사용하기
- onMouseOver 이벤트는 특정 tag 영역 안에 마우스 커서가 진입할 때 발생한다.
---
### 070 - mouseout 이벤트 사용하기
- onMouseOut 이벤트는 특정 tag 영역 안에 마우스 커서가 진입했다가 벗어날 때 발생한다.
---
### 071 - key 이벤트 사용하기(dowm, press, up)
- onKeyDown, onKeyPress는 키를 눌렀을 때 동작하고, onKeyUp은 눌려 있던 키에서 손을 뗐을때 동작한다.
- onKeyDown, onKeyUp는 키를 누르고 떼는 동작 자체에 반응
- onKeyPress는 문자가 실제로 입력됐을 때 반응
---
### 072 - submit 이벤트 사용하기
- onSubmit 이벤트는 <form> 태그에 사용한다.
- <form> 태그 안에 있는 type이 submit인 <input> 태그를 클릭하거나 <input> 태그에 커서를 놓고 Enter를 누르면 onSubmit 이벤트가 발생한다.
---
### 073 - Ref 사용하기
- Ref는 'reference'의 약자로, 참조라는 뜻이다.
- react에서 element의 값을 얻거나 수정할 때 보통 javascript나 jquery를 사용하여 id나 class와 같은 속성으로 element에 접근한다.
- Ref를 사용하면 element가 차마조하는 변수에 접근해 변경하고 element를 제어할 수 있다.
---
### 074 - 커링 함수 구현하기
- 커링(Currying)은 함수의 재사용성을 높이기 위해  함수 자체를 return 하는 함수이다.
- 함수를 하나만 사용할 때는 필요한 모든 파라미터를 한 번에 넣어야 한다.
- 컬링을 사용하면 함수를 분리할 수 있으므로 파라미터도 나눠 전달할 수 있다.
---
### 075 - 하이오더 컴포넌트 구현하기
- 커링과 같이 함수 자체를 인자로 받거나 반환하는 함수를 고차 함수라고 한다.
- 이와 비슷하게 컴포넌트를 인자로 받거나 반환하는 함수를 '고차 컴포넌트(HOC, Higher-Order Component'라고 한다.
---