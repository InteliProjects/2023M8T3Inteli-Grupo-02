import { useContext, useEffect, useState } from "react";
import { HistoryContext } from "@/contexts/historyContext";

export default function History() {
  const { historyState, setHistoryState } = useContext(HistoryContext);

  const history = [
    {
      category1: "Fornecedor",
      category2: "Fornecedor",
      category3: "Fornecedor",
      acuracy: "95.7%",
      date: "01/01/2021",
    },
    {
      category1: "Fornecedor",
      category2: "Fornecedor",
      category3: "Fornecedor",
      acuracy: "95.7%",
      date: "01/01/2021",
    },
    {
      category1: "Fornecedor",
      category2: "Fornecedor",
      category3: "Fornecedor",
      acuracy: "95.7%",
      date: "01/01/2021",
    },
    {
      category1: "Fornecedor",
      category2: "Fornecedor",
      category3: "Fornecedor",
      acuracy: "95.7%",
      date: "01/01/2021",
    },
    {
      category1: "Fornecedor",
      category2: "Fornecedor",
      category3: "Fornecedor",
      acuracy: "95.7%",
      date: "01/01/2021",
    },
    {
      category1: "Fornecedor",
      category2: "Fornecedor",
      category3: "Fornecedor",
      acuracy: "95.7%",
      date: "01/01/2021",
    },
    {
      category1: "Fornecedor",
      category2: "Fornecedor",
      category3: "Fornecedor",
      acuracy: "95.7%",
      date: "01/01/2021",
    },
  ];

  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    console.log("Atualizou");

    let historicoLocal = localStorage.getItem("historico");

    if (historicoLocal) {
      setHistorico(JSON.parse(historicoLocal));
    }
  }, [historyState]);

  useEffect(() => {
    const localStorageData = localStorage.getItem("historico");
    if (localStorageData) {
      setHistorico(JSON.parse(localStorageData));
    }
  }, []);

  return (
    <div className="w-full flex flex-col gap-2 px-2">
      <p>Estado: {historyState}</p>
      {historico &&
        historico.map((item: any) => (
          <div className="w-full border-t-[1px] py-4 border-b-[1px] border-[#71778E] flex flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-md">{item.category1}</h1>
              <label>{item.date}</label>
            </div>

            <div className="flex flex-row items-center justify-center gap-2">
              <label className="w-[15px] h-[15px] rounded-[50%] bg-green-400"></label>
              <h1 className="font-bold text-md">Acurácia: {item.acuracy}</h1>
            </div>

            <div>
              <h1 className="font-bold text-md">{item.category2}</h1>
            </div>

            <div>
              <h1 className="font-bold text-md">{item.category3}</h1>
            </div>
          </div>
        ))}
    </div>
  );
}
