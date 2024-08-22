
import './App.css';
import Todo from './Todo';
export const DUMMY_TODOS = [
  'Learn React',
  'Practice React',
  'Profit!'
];

function App() {
  return(
    <ul>
    {DUMMY_TODOS.map(todo=>(
            <Todo text={todo}/>
    ))}
</ul>
    );
}

export default App;
