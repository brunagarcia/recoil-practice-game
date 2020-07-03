import React from "react";
import { useRecoilValue } from "recoil";
import { gameScore } from "./atoms";

const Gems = () => {
  const score = useRecoilValue(gameScore);
  return (
    <div>
      {[...Array(score)].map((n, i) => {
        return <span key={i}> 💩 </span>;
      })}
    </div>
  );
};

export default Gems;
