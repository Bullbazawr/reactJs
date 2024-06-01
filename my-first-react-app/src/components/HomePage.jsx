import CurrentTime from './CurrentTime'
import EventCard from './EventCard'
import Counterr from './Counterr'
import AddTodoItem from './AddTodoItem'
import Greetings from './Greetings'
import { Link } from 'react-router-dom'
export default function HomePage() {
    return (
        <div>
            <h1>Главная страница</h1>
            <Greetings name='Evgen' />
            <CurrentTime />
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
            <Counterr />
            <AddTodoItem />
            <Link to='/products'>Products</Link>
            <br/>
            <Link to='/about'>About</Link>
        </div>
    )
}