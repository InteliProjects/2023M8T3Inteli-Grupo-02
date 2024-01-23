import { BiSolidInfoSquare } from "react-icons/bi";
import React, { useContext, useEffect } from "react";
import {CallContext} from "@/contexts/callContext";
import { CircleLoading } from "react-loadingg";

export default function ResultsArea() {
  const { state, setState } = useContext(CallContext);

  return (
    <div className="w-full h-auto flex flex-col gap-8 mb-10 justify-between items-center">
      {state && (
        <>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-[95%] flex items-center h-[60px] rounded-3xl bg-primary-blue p-10 gap-4 mb-2">
              <BiSolidInfoSquare size={40} color="white" />
              <h1 className="font-bold text-3xl text-white">Category 1</h1>
            </div>
            <div className="relative w-[90%] min-h-[30px]">
              {state[3] ? (
                <CircleLoading color={"#446FF2"}/>
              ) : (
                <>
                  <div className="w-[90%]">
                    Categoria:{" "}
                    <span className="font-bold">{state[0].name}</span>
                  </div>
                  {/* <div className="w-[90%]">
                    Acurácia:{" "}
                    <span className="font-bold">{state[0].acuracy}</span>
                  </div> */}
                </>
              )}
            </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-[95%] flex items-center h-[60px] rounded-3xl bg-primary-blue p-10 gap-4 mb-2">
              <BiSolidInfoSquare size={40} color="white" />
              <h1 className="font-bold text-3xl text-white">Category 2</h1>
            </div>

            <div className="relative w-[90%] min-h-[30px]">
              {state[3] ? (
                <CircleLoading color={"#446FF2"}/>
              ) : (
                <>
                  <div className="w-[90%]">
                    Categoria:{" "}
                    <span className="font-bold">{state[1].name}</span>
                  </div>
                  {/* <div className="w-[90%]">
                    Acurácia:{" "}
                    <span className="font-bold">{state[1].acuracy}</span>
                  </div> */}
                </>
              )}
            </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-[95%] flex items-center h-[60px] rounded-3xl bg-primary-blue p-10 gap-4 mb-2">
              <BiSolidInfoSquare size={40} color="white" />
              <h1 className="font-bold text-3xl text-white">Category 3</h1>
            </div>

            <div className="relative w-[90%] min-h-[30px]">
              {state[3] ? (
                <CircleLoading color={"#446FF2"}/>
              ) : (
                <>
                  <div className="w-[90%]">
                    Categoria:{" "}
                    <span className="font-bold">{state[2].name}</span>
                  </div>
                  {/* <div className="w-[90%]">
                    Acurácia:{" "}
                    <span className="font-bold">{state[2].acuracy}</span>
                  </div> */}
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
