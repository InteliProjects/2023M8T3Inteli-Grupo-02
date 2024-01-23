"use client";

import History from "@/components/HistoryComponent";
import InputsArea from "@/components/InputsArea";
import ResultsArea from "@/components/ResultsArea";
import { MyProvider } from "@/contexts/callContext";
import { HistoryProvider } from "@/contexts/historyContext";

export default function Home() {
  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <div className="p-10 w-full flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-start gap-12">
        <div>
          <h1 className="font-bold text-2xl mb-2">Welcome to MetaSimulate!</h1>
          <p>
            At MetaSimulate, we understand that managing finances can be complex
            and overwhelming. That's why we've developed an innovative
            application to simplify the way you categorize and understand your
            expenditures.
          </p>
        </div>

        <MyProvider>
          <HistoryProvider>
            <InputsArea submit={onSubmit} />
          </HistoryProvider>

          <ResultsArea />
        </MyProvider>
      </div>

      {/* <div className="w-full flex flex-col items-center">
        <h1 className="font-bold text-4xl w-full">Transaction History</h1>
        <div className="mt-10 w-[95%] h-[225px] overflow-y-scroll">
          <HistoryProvider>
            <History />
          </HistoryProvider>
        </div>
      </div> */}
    </div>
  );
}
