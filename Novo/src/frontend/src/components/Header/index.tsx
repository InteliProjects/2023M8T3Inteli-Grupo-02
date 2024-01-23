"use client";

import Image from "next/image";
import Logo from "../../../assets/logo.png";
import { BiSolidCategory } from "react-icons/bi";
import HeaderComponent from "../HeaderComponent";
import { FaClipboardUser } from "react-icons/fa6";
import { useState } from "react";


export default function Header() {

  const [ active, setActive ] = useState<Array<boolean>>([true, false]);

  return (
    <div className="absolute left-0 top-0 h-[100vh] w-full flex flex-col items-center">
      <div className="w-[100%] mt-12 flex justify-center">
        <Image src={Logo.src} alt="Logo" width={200} height={200} />
      </div>
      <div className="w-[100%] mt-8 flex flex-col items-center gap-8 justify-center">
        <HeaderComponent page={"/"} change={setActive} active={active[0]} Icon={BiSolidCategory} text="Taxonomy"/>
        <HeaderComponent page={"/search"} change={setActive} active={active[1]} Icon={FaClipboardUser} text="Search Supplier"/>
      </div>
    </div>
  );
}