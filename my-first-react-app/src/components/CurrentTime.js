export default function CurrentTime() {
    const now   = new Date().toLocaleDateString()

    return (
        <div>
            <h2 class ='current__time'>Текущее время: {now}</h2>
        </div>
    )
}

