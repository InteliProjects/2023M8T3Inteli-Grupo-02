"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RotateCircleLoading } from "react-loadingg";
import axios from "axios";
import { set } from "react-hook-form";

export default function Search() {
  const [ search, setSearch ] = useState<string>("");
  const [ result, setResult ] = useState<string>("");
  const [ loading, setLoading ] = useState<boolean>(true);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    setResult("");
    setLoading(true);
    const res = await axios.post("http://localhost:3001/get-infos", {
      companyName: search
    })

    setResult(res.data);
    setLoading(false);
  };

  return (
    <>
      <div className="w-full flex items-center justify-center h-[500px] mt-10">
        <div className="w-[80%] h-[90%] flex flex-col items-center shadow-2xl rounded-3xl p-12">
          <div className="relative w-full flex flex-row h-[45px] mt-10 justify-center items-center">
            <form className="w-full flex justify-center items-center" onSubmit={(e) => onSubmit(e)}>
              <input
                type="text"
                className="w-[70%] h-[60px] pl-4 border-black opacity-[0.32] border-2 rounded-xl"
                onChange={(e) => setSearch(e.target.value)}
              ></input>
            </form>

            <FaSearch
              size={30}
              className="absolute opacity-[0.32] right-[16%]"
            />
          </div>

          <div className="flex flex-col gap-2 items-center mt-10">
            <h1 className="font-bold text-2xl text-center w-[80%] mt-10">
              Results
            </h1>
            <p className="relative w-[80%] min-h-[100px] text-center">
              {result && result}
              {
                loading &&
                <RotateCircleLoading color="#446FF2" className="mt-10"/>
              }
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
