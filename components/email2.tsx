import React from "react";
import style from "../styles/sign.module.css";

const Email = () => {
  return (
    <div className={style.main}>
      <div className={style.input}>
        <label>Email</label>

        <input type="text" placeholder="Isaac Newton" />
      </div>
      <div className={style.input}>
        <label>Password</label>

        <input type="text" placeholder="***********" />
      </div>

      <button className={style.condBtn}>Creat Account</button>
      <a href="/" className={style.atag}>
        Forget Password?
      </a>
    </div>
  );
};

export default Email;
