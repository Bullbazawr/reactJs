import { Link, useParams  } from "react-router-dom"

export default function ProductDetails({ pages }) {
    const {id} = useParams()
    const page = pages.find(page => page.id === parseInt(id))

    return (
        <div>
            <h1>{page.title}</h1>
            <p>{page.content}</p>
            <Link to='/products'>Back</Link>
        </div>
    )
}