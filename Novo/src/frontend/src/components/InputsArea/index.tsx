"use client";

import { FaGear } from "react-icons/fa6";
import React, { useContext } from "react";
import { CallContext } from "@/contexts/callContext";
import { HistoryContext } from "@/contexts/historyContext";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

export default function InputsArea(props: { submit: () => void }) {
  const { state, setState } = useContext(CallContext);
  const { historyState, setHistoryState } = useContext(HistoryContext);

  type Inputs = {
    name: string;
    description: string;
    area: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const result: any = await axios.post(`http://localhost:5000/predict`, {
      supName: data.name,
      glDesc: data.description,
      costCenter: data.area,
    });

    const state = [
      {
        name: result.data.predicaoLevel1,
        acuracy: 0.8,
      },
      {
        name: result.data.predicaoLevel2,
        acuracy: 0.8,
      },
      {
        name: result.data.predicaoLevel3,
        acuracy: 0.8,
      },
      false,
    ];

    setState(state);

    //Get the localstorage if it exists
    const localStorageData = localStorage.getItem("historico");

    //If it exists, and the length is less than 4 items, add the new item
    if (localStorageData && JSON.parse(localStorageData).length < 4) {
      const newLocalStorageData = JSON.parse(localStorageData);
      newLocalStorageData.push({
        category1: (state[0] as any).name,
        category2: (state[1] as any).name,
        category3: (state[2] as any).name,
        acuracy: (state[0] as any).acuracy,
        date: new Date().toLocaleDateString(),
      });
      localStorage.setItem("historico", JSON.stringify(newLocalStorageData));
      setHistoryState(`Atualizou ${new Date().toLocaleDateString()}`)
    } else if (localStorageData && JSON.parse(localStorageData).length >= 4) {
      //If it exists, and the length is more than 4 items, remove the first item and add the new item
      const newLocalStorageData = JSON.parse(localStorageData);
      newLocalStorageData.shift();
      newLocalStorageData.push({
        category1: (state[0] as any).name,
        category2: (state[1] as any).name,
        category3: (state[2] as any).name,
        acuracy: (state[0] as any).acuracy,
        date: new Date().toLocaleDateString(),
      });
      localStorage.setItem("historico", JSON.stringify(newLocalStorageData));
      setHistoryState(`Atualizou ${new Date().toLocaleDateString()}`)
    } else {
      //If it doesn't exist, create it
      const newLocalStorageData = [
        {
          category1: (state[0] as any).name,
          category2: (state[1] as any).name,
          category3: (state[2] as any).name,
          acuracy: (state[0] as any).acuracy,
          date: new Date().toLocaleDateString(),
        },
      ];
      localStorage.setItem("historico", JSON.stringify(newLocalStorageData));
      setHistoryState(`Atualizou ${new Date().toLocaleDateString()}`)
    }

    
  };

  return (
    <div className="w-[60%] h-[550px]">
      <div className="w-[90%] h-[90%] rounded-3xl relative p-10 shadow-2xl flex flex-col items-center">
        <h1 className="font-bold text-2xl text-start w-[80%]">
          Add new service
        </h1>
        <div className="flex flex-col w-[80%] mt-8 gap-3">
          <div className="flex flex-col">
            <label className="mb-[-10px]">Name of supplier</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="border-2 border-primary-blue h-[55px] rounded-[12px] p-2 mt-4"
            ></input>
          </div>

          <div className="flex flex-col">
            <label className="mb-[-10px]">Description of purchase</label>
            <input
              type="text"
              {...register("description", { required: true })}
              className="border-2 border-primary-blue h-[55px] rounded-[12px] p-2 mt-4"
            ></input>
          </div>

          <div className="flex flex-col">
            <label className="mb-[-10px]">Resquestor Area</label>
            <input
              type="text"
              {...register("area", { required: true })}
              className="border-2 border-primary-blue h-[55px] rounded-[12px] p-2 mt-4"
            ></input>
          </div>
        </div>

        <button
          onClick={handleSubmit(onSubmit)}
          className="absolute bottom-[20px] right-[20px] w-[70px] h-[70px] rounded-[50%] bg-primary-blue flex items-center justify-center"
        >
          <FaGear size={30} color="white" />
        </button>
      </div>
    </div>
  );
}
