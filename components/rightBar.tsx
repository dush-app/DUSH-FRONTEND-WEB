import style from '../styles/dash.module.css'
import { AiOutlineSearch } from "react-icons/ai";
import React from 'react'

const RightBar = () => {
  return (
    <div className={style.right}>
      <div className={style.search}>
        <input type="text" placeholder="Frequent Contact" />
        <AiOutlineSearch className={style.searchIcon} />
      </div>

      <div className={style.user}>
        <div className={style.info}>
          <p>GW</p>
          <span>Gavin Work</span>
        </div>
        <div className={style.info}>
          <p>GW</p>
          <span>Gavin Work</span>
        </div>
        <div className={style.info}>
          <p>GW</p>
          <span>Gavin Work</span>
        </div>
        <div className={style.info}>
          <p>GW</p>
          <span>Gavin Work</span>
        </div>
        <div className={style.info}>
          <p>GW</p>
          <span>Gavin Work</span>
        </div>
        <div className={style.info}>
          <p>GW</p>
          <span>Gavin Work</span>
        </div>
        <div className={style.info}>
          <p>GW</p>
          <span>Gavin Work</span>
        </div>
        <div className={style.info}>
          <p>GW</p>
          <span>Gavin Work</span>
        </div>
        <div className={style.info}>
          <p>GW</p>
          <span>Gavin Work</span>
        </div>
      </div>

      <div className={style.transa}>
        <h2>Transaction History</h2>

        <div className={style.tHis}>
          <h3>HH</h3>

          <div className={style.text}>
            <p>Hajji Hamis</p>
            <span>Recieved</span>
          </div>
          <h6>+ UGX 2,803,900</h6>
        </div>
        <div className={style.tHis}>
          <h3>HH</h3>

          <div className={style.text}>
            <p>Hajji Hamis</p>
            <span>Recieved</span>
          </div>
          <h6>+ UGX 2,803,900</h6>
        </div>
      </div>

      <div className={style.testi}>
        <div className={style.tesCap}>
          <p>
            Our goal is to enable equal access to organize financial service
          </p>

          <h2>
            Hamis Kiggundu <br /> CEO
          </h2>
        </div>
        <div className={style.tesCap}>
          <p>
            Our goal is to enable equal access to organize financial service
          </p>

          <h2>
            Hamis Kiggundu <br /> CEO
          </h2>
        </div>
      </div>
    </div>
  );
}

export default RightBar