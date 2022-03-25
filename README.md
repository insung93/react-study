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