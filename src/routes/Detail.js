import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const toDos = useSelector(state => state);
  const id = useParams().id;
  const toDo = toDos.find(toDo => toDo.id === parseInt(id));
  const date = new Date(parseInt(id));
  return (
    <>
      <h2>Text : {toDo.text}</h2>
      <h3>Created At : {date.toString()}</h3>
    </>
  )
}

export default Detail;