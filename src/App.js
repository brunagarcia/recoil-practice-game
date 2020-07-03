import React from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import Game from "./Game";
import Score from "./Score";
import Gems from "./Gems";

const App = () => {
  return (
    <RecoilRoot>
      <div className='App'>
        Recoil game!
        <Score />
        <Game />
        <Gems />
      </div>
    </RecoilRoot>
  );
};

export default App;
