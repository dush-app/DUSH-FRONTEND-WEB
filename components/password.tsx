import React from "react";
import style from "../styles/sign.module.css";
import Link from "next/link";

const Password = () => {
  return (
    <div className={style.main}>
      <div className={style.input}>
        <label>You can reset your password here</label>

        <input type="text" placeholder="***********" />
      </div>
      <Link href="/SignIn">
        <a>
          <button className={style.condBtn}>Reset Password</button>
        </a>
      </Link>{" "}
    </div>
  );
};

export default Password;
