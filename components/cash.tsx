import React from "react";
import style from "../styles/dash.module.css";
import { BiPaperPlane } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import Link from "next/link";

const Cash = () => {
  return (
    <div className={style.cash}>
      <div className={style.titl}>
        <h2>Cash Balance</h2>
        <span>NGN 999,999</span>
      </div>

      <div className={style.trans}>
        <Link href="/sendcash">
          <a className={style.transCap}>
            <BiPaperPlane className={style.transIcon} />
            <p>Send</p>
          </a>
        </Link>
        <Link href="/deposit">
          <a className={style.transCap}>
            <AiOutlinePlus className={style.transIcon} />
            <p>Deposit</p>
          </a>
        </Link>

        <Link href="/payment">
          <a className={style.transCap}>
            <MdPayment className={style.transIcon} />
            <p>Payment</p>
          </a>
        </Link>
      </div>

      <div className={style.amt}>
        <img src="/c3.png" alt="" />
        <img src="/c2.png" alt="" />
        <img src="/c1.png" alt="" />
      </div>
    </div>
  );
};

export default Cash;
