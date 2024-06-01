import { Link, useParams } from "react-router-dom"

export default function HomePage() {
    return (
        <div>
            <h1>Главная Страница</h1>
            <Link to='/about'>О нас</Link>
        </div>
    )}