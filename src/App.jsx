import React, { useState } from "react";
import ColorfullMessage from "./components/colorfullMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faseShowFlag, setFaseShowFlag] = useState(true);

  const onClickButtonUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaseShowFlag(!faseShowFlag);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfullMessage color="blue">お元気ですか？</ColorfullMessage>
      <ColorfullMessage color="pink" message="元気です！" />
      <button onClick={onClickButtonUp}>カウントアップボタン</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>On/Off</button>
      <p>{num}</p>
      {/* faseShowFlagがtrueの時に表示する */}
      {faseShowFlag && <p>(*´꒳`*)</p>}
    </>
  );
};

export default App;
