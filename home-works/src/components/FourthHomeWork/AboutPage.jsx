import { Link, useParams } from "react-router-dom"

export default function AboutPage({pages}){
    const {id} = useParams()
    return (
        <div>
            <h1>О нас</h1>
            <Link to={'/'}>Главная</Link>
        </div>
    )
}