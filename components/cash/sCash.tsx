import React from "react";
import style from "../../styles/dep.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

const SCash = () => {
  return (
    <div className={style.dcash}>
      <div className={style.title}>
        <Link href="/dashboard">
          <a>
            <BsArrowLeft className={style.tIcon} />
          </a>
        </Link>

        <p>Send</p>
      </div>

      <h5>Recent Deposite</h5>

      <div className={style.user}>
        <div className={style.info}>
          <p>GW</p>
          <span>Gavin Work</span>
          <h6>+UGX 105,000</h6>
        </div>
        <div className={style.info}>
          <p>GW</p>
          <span>Gavin Work</span>
          <h6>+UGX 105,000</h6>
        </div>
        <div className={style.info}>
          <p>GW</p>
          <span>Gavin Work</span>
          <h6>+UGX 105,000</h6>
        </div>
        <div className={style.info}>
          <p>GW</p>
          <span>Gavin Work</span>
          <h6>+UGX 105,000</h6>
        </div>
        <div className={style.info}>
          <p>GW</p>
          <span>Gavin Work</span>
          <h6>+UGX 105,000</h6>
        </div>
        <div className={style.info}>
          <p>GW</p>
          <span>Gavin Work</span>
          <h6>+UGX 105,000</h6>
        </div>
        <div className={style.info}>
          <p>GW</p>
          <span>Gavin Work</span>
          <h6>+UGX 105,000</h6>
        </div>
        <div className={style.info}>
          <p>GW</p>
          <span>Gavin Work</span>
          <h6>+UGX 105,000</h6>
        </div>
        <div className={style.info}>
          <p>GW</p>
          <span>Gavin Work</span>
          <h6>+UGX 105,000</h6>
        </div>
      </div>

      <div className={style.tran}>
        <div className={style.transCap}>
          <button>Send Using</button>
          <div className={style.iccon}>
            <IoMdArrowDropdownCircle className={style.conCap} />
            <p>Phone Number</p>
          </div>
        </div>
        <div className={style.transCap}>
          <button>Phone Number</button>
          <input type="text" placeholder="234567890" />
        </div>
        <div className={style.transCap}>
          <button>Amount</button>
          <input type="text" placeholder="2,333,333" />
        </div>
        <div className={style.transCap}>
          <button>Payment Channel</button>
          <div className={style.card}>
            <img src="/airtel.png" alt="" />
            <img src="/mtn.png" alt="" />
            <img src="/pay.png" alt="" />
            <img src="/visa.png" alt="" />
          </div>
        </div>

        <div className={style.tb}>
          <p>Send</p>
          <button className={style.lsBtn}>
            <MdKeyboardArrowRight className={style.conCap} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SCash;
