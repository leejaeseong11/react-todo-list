import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { isCompositeComponent } from 'react-dom/test-utils';
import './TodoList.css';

function TodoList() {
  let [todoId, setTodoId] = useState(0); // 할 일 목록의 id
  let [todoInput, setTodoInput] = useState(''); // 입력된 할 일
  let [todo, setTodo] = useState({}); // 할 일 목록의 id와 입력된 할 일에 대한 객체
  let [todoList, setTodoList] = useState([]); // 할 일 목록 객체 리스트

  const addTodo = () => {
    if (todoInput !== '') {
      let newTodo = { id: todoId, content: todoInput };
      setTodo(newTodo);
      setTodoId(todoId + 1);

      setTodoInput('');
    } else {
      alert('할 일을 입력하세요');
    }
  };

  useEffect(() => {
    if (todoId == 0) {
      setTodoId(todoId + 1);
      return;
    }
    setTodoList([...todoList, todo]);
  }, [todo]);

  const deleteTodo = todoId => {
    setTodoList(todoList.filter(n => n.id !== todoId));
  };

  const updateList = todoList.map(todo => (
    <div key={todo.id}>
      <input className='form-check-input' type='checkbox' id='todo' />
      <label className='form-check-label strikethrough' htmlFor='todo'>
        {todo.content}
      </label>
      <button id='delete-todo-button' className='btn btn-danger' onClick={() => deleteTodo(todo.id)}>
        삭제
      </button>
    </div>
  ));

  return (
    <React.Fragment>
      <div className='row justify-content-center'>
        <div className='col-md-4'>
          <input className='form-control' type='text' onChange={e => setTodoInput(e.target.value)} value={todoInput} placeholder='할 일' />
        </div>
        <div className='col-md-2'>
          <Button className='btn btn-primary' onClick={addTodo}>
            할 일 추가
          </Button>
        </div>
        {updateList}
      </div>
      {}
    </React.Fragment>
  );
}

export default TodoList;
