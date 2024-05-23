import { useState } from 'react'

export default function CommentList() {
    const [comments, setComments] = useState([])
    const [currentComment, setCurrentComment] = useState('')

    const addComent = (e) => {
        e.preventDefault()
        if (!currentComment.trim()) return
        setComments([...comments, currentComment])
        setCurrentComment('')
    }


    const handleInputChange = (e) => {
        setCurrentComment(e.target.value)
    }

    return (
        <div>
            <form onSubmit={addComent}>
                <input type='text' value={currentComment} onChange={handleInputChange} />
                <button type='submit'>Опубликовать коментарий</button>
            </form>
            <ul>
                {comments.map((comment, i) => (
                    <li key={i}>
                        {comment}
                        <button onClick={() => setComments(comments.filter(comment => comment!== comments[i]))} type='submit'>
                            Удалить
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}