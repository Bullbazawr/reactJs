export default function Greeting() {
    const now = new Date().getHours()
        if (now < 10){
            return <h1>Доброе Утро</h1>
        }
        if (now < 18){
            return <h1>Добрый День</h1>
        }
        if(now <23){
            return <h1>Добрый Вечер</h1>
        }
        if(now < 4){
            return <h1>Доброй Ночи</h1>
        }
}
