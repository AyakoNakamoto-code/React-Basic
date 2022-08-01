import React, { useState } from "react";
import { useEffect } from "react";
import ColorfullMessage from "./components/colorfullMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faseShowFlag, setFaseShowFlag] = useState(false);

  const onClickButtonUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaseShowFlag(!faseShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faseShowFlag || setFaseShowFlag(true);
      } else {
        faseShowFlag && setFaseShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

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
