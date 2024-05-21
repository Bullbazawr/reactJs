export default function EventCard({number, myEvent, myDate, place}){
    return(
        <div>
            <h1>Карточка № {number}</h1>
            <p>Название: {myEvent}</p>
            <p>Дата: {myDate}</p>
            <p>Место: {place}</p>
        </div>
    )
}