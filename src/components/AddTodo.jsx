import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input != "") {
      dispatch(addTodo(input));
      setInput("");
    }

  }
  return (
    <form className='todo-box' onSubmit={addTodoHandler}>
      <input type="text" placeholder='Enter todo' onChange={e => setInput(e.target.value)}
        value={input} />

      <button>Add</button>
    </form>
  )
}

export default AddTodo
