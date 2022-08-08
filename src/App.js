import './App.css';
import Click from './time/Click'
import Search from './search/search'
function App() {
  return (
    <div className="App">
      <div className="Timer">
        <Click/>
        <Search/>
      </div>
    </div>
  );
}

export default App;
