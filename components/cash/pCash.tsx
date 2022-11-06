import React from "react";
import style from "../../styles/pay.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import { HiOutlineNewspaper } from "react-icons/hi";
import {AiTwotoneHome } from 'react-icons/ai'



const PCash = () => {
  return (
    <div className={style.pcash}>
      <div className={style.title}>
        <BsArrowLeft className={style.tIcon} />
        <p>PAYMENT</p>
      </div>

      <h5>Recent Deposite</h5>

      <div className={style.user}>
        <div className={style.info}>
          <img src="/ursb.png" alt="" />
          <span>Gavin Work</span>
          <h6>+UGX 105,000</h6>
        </div>
        <div className={style.info}>
          <img src="/ursb.png" alt="" />
          <span>Gavin Work</span>
          <h6>+UGX 105,000</h6>
        </div>
        <div className={style.info}>
          <img src="/ursb.png" alt="" />
          <span>Gavin Work</span>
          <h6>+UGX 105,000</h6>
        </div>
        <div className={style.info}>
          <img src="/ursb.png" alt="" />
          <span>Gavin Work</span>
          <h6>+UGX 105,000</h6>
        </div>
        <div className={style.info}>
          <img src="/ursb.png" alt="" />
          <span>Gavin Work</span>
          <h6>+UGX 105,000</h6>
        </div>
      </div>

      <div className={style.trans}>
        <div className={style.transCap}>
          <HiOutlineNewspaper className={style.transIcon} />
          <p>Bills</p>
        </div>
        <div className={style.transCap}>
          <BiPhone className={style.transIcon} />
          <p>Airtime & Data</p>
        </div>
        <div className={style.transCap}>
          <AiTwotoneHome className={style.transIcon} />
          <p>Utilities</p>
        </div>
      </div>
      <div className={style.amt}>
        <img src="/c3.png" alt="" />
        <img src="/c2.png" alt="" />
        <img src="/c1.png" alt="" />
      </div>
    </div>
  );
};

export default PCash;
