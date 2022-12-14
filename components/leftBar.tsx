import React from "react";
import style from "../styles/dash.module.css";
import {  AiOutlineHistory } from "react-icons/ai";
import { BsHouseDoor } from 'react-icons/bs'
import { BiWallet } from "react-icons/bi";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { GoSignOut } from "react-icons/go";
import {GiHamburgerMenu } from 'react-icons/gi'
import Link from "next/link";

const LeftBar = () => {
  return (
    <div className={style.left}>
      <h2>
        Good morning, <span>Mr Quadri</span>
      </h2>

      <ul>
        <li className={style.ham}>
          <GiHamburgerMenu className={style.icon} />
        </li>
        <li>
          <BsHouseDoor className={style.icon} /> <span>Home</span>
        </li>
        <li>
          <IoNotificationsOutline className={style.icon} />
          <span>Navigation</span>
        </li>
        <li>
          <Link href="/dashboard">
            <a>
          <BiWallet className={style.icon} /> <span>Wallet</span>
          </a>
          </Link>
        </li>
        <li>
          <BsHouseDoor className={style.icon} /> <span>Invite friend</span>
        </li>
        <li>
          <IoSettingsOutline className={style.icon} /> <span>Setting</span>
        </li>
        <li>
          <AiOutlineHistory className={style.icon} /> <span>History</span>
        </li>
        <li className={style.sign}>
          <Link href="/signIn">
            <a>
              <GoSignOut className={style.icon} /> <span>Sign Out</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftBar;
