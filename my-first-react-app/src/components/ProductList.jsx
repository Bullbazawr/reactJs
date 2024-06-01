import { Link } from "react-router-dom";

export default function ProductList({ pages }) {
    return (
        <ul>
            {pages.map(page => <li key={page.id}><Link to={`/products/${page.id}`} >{page.title}</Link></li>)}
        </ul>
    )
}