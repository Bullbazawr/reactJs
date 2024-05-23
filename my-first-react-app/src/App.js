import Greeting from './components/Greetings'
import './App.css'
import CurrentTime from './components/CurrentTime'
import EventCard from './components/EventCard'
import Counterr from './components/Counterr'
import TextInput from './components/TextInput'
import AddTodoItem from './components/AddTodoItem'

function App() {
  return (
    <div className="App">
      <Greeting/>
      <CurrentTime/>
      <EventCard
        number='1'
        myEvent='Концерт'
        myDate='23.01.2025'
        place='Москва'
        />
              <EventCard
        number='2'
        myEvent='Концерт'
        myDate='24.01.2025'
        place='питер'
        />
        <Counterr/>
        <AddTodoItem/>
    </div>
  )
}

export default App