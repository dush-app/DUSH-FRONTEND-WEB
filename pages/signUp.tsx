import React, {useState} from 'react'
import Email from '../components/email';
import Phone from '../components/phone';
import style from '../styles/sign.module.css'


const SignUp = () => {

      const [toggleState, SetToggleState] = useState(1);
      const toggleTab = (index: React.SetStateAction<number>) => {
        SetToggleState(index);
      };
  return (
    <div className={style.main}>
      <h1>SIGN UP</h1>

      <div className={style.option}>
        <span
          onClick={() => toggleTab(1)}
          className={
            toggleState === 1
              ? `${style.tittle} ${style.active} `
              : style.tittle
          }
        >
          Email
        </span>

        <span className={style.tit}>Or </span>

        <span
          onClick={() => toggleTab(2)}
          className={
            toggleState === 2
              ? `${style.tittle} ${style.active} `
              : style.tittle
          }
        >
          Phone
        </span>
      </div>

      <div className={style.cont}>
        {toggleState === 1 ? <Email /> : <Phone />}
      </div>
    </div>
  );
}

export default SignUp