import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addToDo } from '../store';
import ToDo from "../components/ToDo"

const Home = () => {
  const toDos = useSelector(state => state);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo(text));
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => <ToDo {...toDo} />)}
      </ul>
    </>
  );
}

export default Home;
