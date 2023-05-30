## 1. React에서 Props Drilling을 해결하는 전략들은 무엇이 있을까?

1. Context API 사용하기
   같은 state를 공유하는 컴포넌트들의 가장 상위에 Context로 state를 관리함으로써 props drilling을 해결할 수 있다.

2. 전역상태관리 라이브러리
   MobX, Recoil, Redux와 같은 전역상태관리 라이브러리로 전역에서 상태를 관리함으로써 해결할 수 있다.

3. childeren 적극 사용하기

```js
import React from "react";
import "./styles.css";

export default function App() {
  const content = "Who needs me?";
  return (
    <div className="App">
      <FirstComponent>
        <SecondComponent>
          <ThirdComponent>
            <ComponentNeedingProps content={content} />
          </ThirdComponent>
        </SecondComponent>
      </FirstComponent>
    </div>
  );
}

function FirstComponent({ children }) {
  return (
    <div>
      <h3>I am the first component</h3>;{children}
    </div>
  );
}

function SecondComponent({ children }) {
  return (
    <div>
      <h3>I am the second component</h3>;{children}
    </div>
  );
}

function ThirdComponent({ children }) {
  return (
    <div>
      <h3>I am the third component</h3>
      {children}
    </div>
  );
}

function ComponentNeedingProps({ content }) {
  return <h3>{content}</h3>;
}
```

코드 추적이 어렵지 않게 관리할 수 있다!

---

## 2. 그렇다면 나는 합동세미나, 솝커톤, 웹잼에서 어떤걸 시도해보고 싶은가? 또 그 이유는 무엇인가?

전역 상태관리인 Recoil을 사용해보고싶다. 지난 웹잼에서 어마무시한 props drilling을 경험했고 덕분에 상태 관리에 대한 필요성을 더더욱 느꼈다.
또 웹심화에서 다룬 selector은 제대로 사용해보지 못했는데, selector로 값을 동적으로 관리하는 것도 경험해보고싶다.
