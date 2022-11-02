import React from "react";
import style from "../styles/sign.module.css";

const Phone = () => {
  return (
    <div className={style.main}>
      <div className={style.input}>
        <label>Phone</label>

        <input type="num" placeholder="+123-456-7890" />
      </div>
      <div className={style.input}>
        <label>Password</label>

        <input type="text" placeholder="***********" />
      </div>

      <button className={style.condBtn}>Creat Account</button>
      <a href="/" className={style.atag}>Forget Password?</a>
    </div>
  );
};

export default Phone;
