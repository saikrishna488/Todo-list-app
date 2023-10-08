import './App.css'
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {

  return (
    <div className='container'>
      <h4>Todo-List App</h4>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App
