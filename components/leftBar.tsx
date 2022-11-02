import React from 'react'
import style from '../styles/dash.module.css'
import { AiFillHome, AiOutlineHistory, AiOutlineSearch } from "react-icons/ai";
import {
  IoNotificationsOutline,
  IoWallet,
  IoSettingsOutline,
} from "react-icons/io5";
import { GoSignOut } from "react-icons/go";


const LeftBar = () => {
  return (
    <div className={style.left}>
      <h2>
        Good morning, <span>Mr Quadri</span>
      </h2>

      <ul>
        <li>
          <AiFillHome className={style.icon} /> Home
        </li>
        <li>
          <IoNotificationsOutline className={style.icon} /> Navigation
        </li>
        <li>
          <IoWallet className={style.icon} /> Wallet
        </li>
        <li>
          <AiFillHome className={style.icon} /> Invite friend
        </li>
        <li>
          <IoSettingsOutline className={style.icon} /> Setting{" "}
        </li>
        <li>
          <AiOutlineHistory /> History
        </li>
        <li className={style.sign}>
          <GoSignOut /> Sign Out
        </li>
      </ul>
    </div>
  );
}

export default LeftBar