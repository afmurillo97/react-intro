import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


const defaultTools = [

  { text: 'Pill Onion', completed: true },
  { text: 'Take React.js Course', completed: false },
  { text: 'LALALALALALALA', completed: true },
  { text: 'Sleep 8 Hours', completed: false }

];

function App() {
  return (
    <>

      <TodoCounter completed={16} total={25}/>
      <TodoSearch/>

      <TodoList>

        {defaultTools.map(todo => 
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        )}

      </TodoList>

      <CreateTodoButton/>

    </>
  );
}

export default App;
