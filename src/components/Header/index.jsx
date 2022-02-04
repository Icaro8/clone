import React from "react";

import { AiOutlineMenu, AiFillYoutube, AiFillAudio } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { RiVideoAddLine } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";

export function Header() {
  return (
    <nav>
      <div>
        <AiOutlineMenu />
      </div>
      <div>
        <AiFillYoutube />
        <h1>
          YouTube<sup>BR</sup>
        </h1>
      </div>
      <div>
        <div>
          <input type="search" name="" id="" placeholder="Pesquisar" />
          <BsSearch />
        </div>
        <div>
          <AiFillAudio />
        </div>
      </div>
      <div>
        <RiVideoAddLine />
        <CgMenuGridR />
        <IoMdNotificationsOutline />
      </div>
    </nav>
  );
}
