import React from "react";
import style from "../../styles/dep.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";

const Dcrypto = () => {
  return (
    <div className={style.dcash}>
      <div className={style.title}>
        <Link href="/dashboard">
          <a>
            <BsArrowLeft className={style.tIcon} />
          </a>
        </Link>
        <p>Deposit</p>
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
          <div className={style.con}>
            <IoMdArrowDropdownCircle className={style.conCap} />
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
          <input type="text" placeholder="MTN MOMO" />
        </div>

        <div className={style.tb}>
          <button className={style.lsBtn}>
            <AiOutlinePlus className={style.conCap} />
          </button>
          <p>Deposite</p>
        </div>
      </div>
    </div>
  );
};

export default Dcrypto;
