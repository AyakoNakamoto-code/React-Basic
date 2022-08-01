import React, { useState } from "react";
import ColorfullMessage from "./components/colorfullMessage";

const App = () => {
  const onClickButton = () => alert();
  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfullMessage color="blue">お元気ですか？</ColorfullMessage>
      <ColorfullMessage color="pink" message="元気です！" />
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};

export default App;
