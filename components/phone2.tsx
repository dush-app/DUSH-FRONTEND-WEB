import React from "react";
import style from "../styles/sign.module.css";
import Link from "next/link";

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
      <Link href="/dashboard">
        <a>
          <button className={style.condBtn}>Reset Password</button>
        </a>
      </Link>
      <a href="/" className={style.atag}>
        Forget Password?
      </a>
    </div>
  );
};

export default Phone;
