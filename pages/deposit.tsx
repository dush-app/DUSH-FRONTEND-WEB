import LeftBar from "../components/leftBar"
import RightBar from "../components/rightBar"
import style from '../styles/dep.module.css'
import { useState } from "react"
import DCash from "../components/cash/dCash"
import Dcrypto from "../components/crypto/Dcrypto"


const Deposit = () => {
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
            {toggleState === 1 ? <DCash /> : <Dcrypto />}
          </div>
        </div>
        <RightBar />
      </div>
    );
}

export default Deposit