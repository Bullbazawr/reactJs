import { useState } from "react"

export default function TextInput() {
    const [text, setText] = useState('')

    const addText = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <input type="text" onChange={addText} />
            <p>{text}</p>
        </div>
    )

}