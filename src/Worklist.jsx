import React from 'react';
import {FaRegTrashAlt} from 'react-icons/fa';

const style = {
    li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
    liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
    row: `flex`,
    text: `ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-through`,
    button: `cursor-pointer flex items-center`
}

const Worklist = ({ worklist, toggleComplete, deleteWorklist }) =>{
    return (
        <li className={worklist.hungdevtest ? style.liComplete : style.li}>
            <div className={style.row}>
                <input onChange={() => toggleComplete(worklist)} type="checkbox" checked={worklist.hungdevtest ? 'checked': ''} />
                <p onClick={() => toggleComplete(worklist)} className={worklist.hungdevtest ? style.textComplete : style.text}>{worklist.text}</p>
            </div>
            <button onClick={() => deleteWorklist(worklist.id)}>{<FaRegTrashAlt />}</button>
        </li>
    )
}

export default Worklist