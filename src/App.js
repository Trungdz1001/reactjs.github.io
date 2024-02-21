import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Worklist from "./Worklist";
import { db } from "./sql/firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc
} from "firebase/firestore";

// CSS BY TAILWINDCSS
const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center font-bold p-2`,
};

function App() {
  const [worklists, setWorklists] = useState([]);
  const [input, setInput] = useState("");
  // Tao Worklist
  const createWorklist = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Nhap worklist ");
      return;
    }
    await addDoc(collection(db, "worklists"), {
      text: input,
      hungdevtest: false,
    });
    setInput("");
  };

  // Doc Worklist
  useEffect(() => {
    const q = query(collection(db, "worklists"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let worklistsArr = [];
      QuerySnapshot.forEach((doc) => {
        worklistsArr.push({ ...doc.data(), id: doc.id });
      });
      setWorklists(worklistsArr);
    });
    return () => unsubscribe();
  }, []);
  // Update worklist
  const toggleComplete = async (worklist) => {
    await updateDoc(doc(db, "worklists", worklist.id), {
      hungdevtest: !worklist.completed,
    });
  };

  // xoa WORKLIst
  const deleteWorklist = async (id) => {
    await deleteDoc(doc(db, 'worklists', id))
  }

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>APP WORKLIST</h3>
        <form onSubmit={createWorklist} className={style.form}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
            type="text"
            placeholder="Add WorkList"
          />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {worklists.map((worklist, index) => (
            <Worklist
              key={index}
              worklist={worklist}
              toggleComplete={toggleComplete}
              deleteWorklist={deleteWorklist}
            />
          ))}
        </ul>

        {worklists.length < 1 ? null : (
          <p
            className={style.count}
          >{`Bạn Có ${worklists.length} Việc Cần Làm!`}</p>
        )}
      </div>
    </div>
  );
}

export default App;
