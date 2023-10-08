import { useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const copy = (e) => {
    navigator.clipboard.writeText(e.target.innerHTML);
  }
  if (todos.length > 0) {
    return (
      <div className="todos">
        {
          todos.map((todo) => (
            <div key={todo.id} className="todo">
              <p className="text" onClick={e => copy(e)}>
                {todo.text}
              </p>
              <AiFillDelete className="img" onClick={() => dispatch(removeTodo(todo.id))} size={30} />
            </div>
          ))
        }
      </div>
    )
  }
  else {
    return (
      <div>
        <div className="todos">
          <div className="todo">
            <p className="text" >
              empty
            </p>
          </div>
        </div>
      </div>
    )
  }

}

export default Todos
