import { useState } from "react";
import { db } from "../config/firebaseConfig";
import {doc, onSnapshot } from "firebase/firestore";

interface IAnalysisProps {
}

const Analysis: React.FunctionComponent<IAnalysisProps> = () => {

    const  [total, setTotal] = useState('');

    const docRef = doc(db, "clicks", "Xg8edvpQwtdX0Y3V0Iv0");
    onSnapshot(docRef, (docSnap: { data: () => any; }) => {
      const total: any = docSnap.data();
        setTotal(total.total)
    });

  return(
    <>
   
    <div className='analysis mb-10  h-[100px] border flex justify-center items-center bg-blue-500 rounded-md ' id='analysis'>
      <h3  className='text-3xl text-white capitalize '>
        total clicks : {total}
      </h3>
    </div>
   
    </>
  ) ;
};

export default Analysis;
