import React, { useState } from "react";
import style from "../styles/dash.module.css";
import { BsArrowLeft} from 'react-icons/bs'
import Cash from "../components/cash";
import Crypto from "../components/crypto";
import LeftBar from "../components/leftBar";
import RightBar from "../components/rightBar";

const Dashboard = () => {
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
          {toggleState === 1 ? <Cash /> : <Crypto />}
        </div>
      </div>

      <div className={style.rigNoti}>
        <p>Open Transaction</p>
        <BsArrowLeft className={style.rigIcon} />
      </div>
      <RightBar />
    </div>
  );
};

export default Dashboard;
