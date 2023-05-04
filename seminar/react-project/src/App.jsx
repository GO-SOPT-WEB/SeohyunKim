import { useState } from "react";
// setState 동작 방식 이해하기
export default function App() {
  const [number, setNumber] = useState(1);

  // const add = () => setNumber(number + 1);
  // const subtract = () => setNumber(number - 1);
  // const multiplyBy2 = () => setNumber(number * 2);
  // const multiplyBy2AndAddBy1 = () => {
  //   multiplyBy2();
  //   add();
  // };

  const add = () => setNumber((number) => number + 1);
  //2. 그 다음에 넘겨받은 인자의 함수도 아까 그 큐에 넣는다.
  const subtract = () => setNumber((number) => number - 1);
  const multiplyBy2 = () => setNumber((number) => number * 2);
  //1. setNumber가 함수를 넘겨받으면 이걸 나중에 실행 해야지 하고 큐라는 구조를 가지고 있는 저장 공간에 넣는다.
  const multiplyBy2AndAddBy1 = () => {
    multiplyBy2();
    add();
  };

  return (
    <div className="outer-wrapper">
      <h1>Number : {number}</h1>
      <div className="btn-wrapper">
        <button onClick={add}>+ 1</button>
        <button onClick={subtract}>- 1</button>
        <button onClick={multiplyBy2}>*2</button>
        <button onClick={multiplyBy2AndAddBy1}>*2 + 1</button>
      </div>
    </div>
  );
}
