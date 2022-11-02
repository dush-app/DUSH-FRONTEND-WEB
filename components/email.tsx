import React from "react";
import style from "../styles/sign.module.css";

const Email = () => {
  return (
    <div className={style.main}>
      <div className={style.input}>
        <label>Name</label>

        <input type="text" placeholder="Isaac Newton" />
      </div>
      <div className={style.input}>
        <label>Email</label>

        <input type="text" placeholder="Isaac Newton" />
      </div>
      <div className={style.input}>
        <label>Password</label>

        <input type="text" placeholder="***********" />
      </div>
      <div className={style.input}>
        <label>Confirm Password</label>

        <input type="text" placeholder="***********" />
      </div>

      <p className={style.cond}>
        I accept all the terms and condition{" "}
        <input type="checkbox" name="check" id="" />
      </p>
      <button className={style.condBtn}>Creat Account</button>
    </div>
  );
};

export default Email;