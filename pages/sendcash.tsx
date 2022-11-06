import LeftBar from "../components/leftBar";
import RightBar from "../components/rightBar";
import style from "../styles/dep.module.css";
import { useState } from "react";
import SCash from "../components/cash/sCash";
import Dcrypto from "../components/crypto/Dcrypto";

const SendCash = () => {
  const [toggleState, SetToggleState] = useState(1);
  const toggleTab = (index: React.SetStateAction<number>) => {
    SetToggleState(index);
  };

  return (
    <div className={style.main}>
      <LeftBar />
      <div className={style.mid}>
        <div className={style.option}>
          <span
            onClick={() => toggleTab(1)}
            className={
              toggleState === 1
                ? `${style.tittle} ${style.active} `
                : style.tittle
            }
          >
            Cash
          </span>
          <span
            onClick={() => toggleTab(2)}
            className={
              toggleState === 2
                ? `${style.tittle} ${style.active} `
                : style.tittle
            }
          >
            Crypto
          </span>
        </div>
        <div className={style.cont}>
          {toggleState === 1 ? <SCash /> : <Dcrypto />}
        </div>
      </div>
      <RightBar />
    </div>
  );
};

export default SendCash;
