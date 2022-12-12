import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: "Bruce",
    last: "Lee",
  }

  const nameList = [
    {
      first: "Bruce",
      last: "Lee",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana  ",
    },
  ]
  
  return (
    <div className="App">
      <Greet name="rangga" messageCount={10} isLoggedIn={true} />
      <Person name={personName}/>
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
