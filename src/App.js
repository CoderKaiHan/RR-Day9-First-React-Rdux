import Counter from './Counter';
import Todo from './Todo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <div>
        <h1>Mke Your Todo List Here</h1>
        <p>Click on any todo to remove it from your list.</p>
      </div>
      <Todo />
    </div>
  );
}

export default App;