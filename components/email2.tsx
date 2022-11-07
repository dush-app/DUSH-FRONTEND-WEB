import React from "react";
import style from "../styles/sign.module.css";
import Link from "next/link";

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
      <Link href="/dashboard">
        <a>
          <button className={style.condBtn}>Reset Password</button>
        </a>
      </Link>{" "}
      <Link href="/">
        <a className={style.atag}>Forget Password?</a>
      </Link>
    </div>
  );
};

export default Email;
