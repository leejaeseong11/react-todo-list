import React, { useState } from 'react';
import CheckForm from './CheckForm';
import { Button } from 'react-bootstrap';

function TodoList() {
  let [todo, setTodo] = useState('');
  let [todoList, setTodoList] = useState([]);

  function addTodo() {
    setTodoList([
      ...todoList,
      <div>
        <CheckForm todo={todo} />
      </div>,
    ]);
    setTodo('');
  }

  return (
    <React.Fragment>
      <div class='row justify-content-center'>
        <div class='col-md-4'>
          <input class='form-control' type='text' onChange={e => setTodo(e.target.value)} value={todo} placeholder='할 일' />
        </div>
        <div class='col-md-2'>
          <Button variant='primary' onClick={addTodo}>
            할 일 추가
          </Button>
        </div>
      </div>
      {todoList}
    </React.Fragment>
  );
}

export default TodoList;
