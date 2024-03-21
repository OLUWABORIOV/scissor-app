import * as React from "react";
import { useState } from "react";
import { db } from "../config/firebaseConfig";
import { doc, onSnapshot } from "firebase/firestore";
import { HeaderPg } from "../components";

interface IHistoryPageProps {}

const HistoryPage: React.FunctionComponent<IHistoryPageProps> = () => {
  const [total, setTotal] = useState("");

  const docRef = doc(db, "clicks", "Xg8edvpQwtdX0Y3V0Iv0");
  onSnapshot(docRef, (docSnap) => {
    const total: any = docSnap.data();
    setTotal(total.total);
  });
  return (
    <>
      <div className="">
         <div>
        < HeaderPg />
        </div>

        <div className="border bg-slate-500 flex h-[100vh] pt-[100px] px-10 gap-8 ">
          <div className="w-1/2  h-[200px] border flex justify-center items-center bg-slate-700 rounded-md ">
            <h2 className=" text-white text-3xl">Clicks : {total}</h2>
          </div>
          <div className="w-1/2  h-[200px] border flex justify-center items-center bg-blue-500 rounded-md ">
            <h2 className=" text-white  text-3xl">Total clicks : {total}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
