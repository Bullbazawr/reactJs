export default function Greeting({ name }) {
    const now = new Date().getHours()
    if (now < 10) {
        return <h1>Доброе Утро, {name}!</h1>
    }
    if (now < 18) {
        return <h1>Добрый День, {name}!</h1>
    }
    if (now < 23) {
        return <h1>Добрый Вечер, {name}!</h1>
    }
    if (now < 4) {
        return <h1>Доброй Ночи, {name}!</h1>
    }
}
