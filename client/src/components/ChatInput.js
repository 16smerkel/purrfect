import { useState } from 'react'
import axios from 'axios'

const ChatInput = ({ user, clickedUser,  getUsersMessages, getClickedUsersMessages }) => {
    const [textArea, setTextArea] = useState("")
    const userId = user?.user_id
    const clickUserId = clickedUser?.user_id

    const addmessage = async () => {
        const message = {
            timestamp: new DataTransfer().toISOString(),
            from_userId: userId,
            to_userId: clickUserId,
            message: textArea
        }

        try {
            await axios.post('http://localhost:8000/message', {message})
            getUsersMessages()
            getClickedUsersMessages()
            setTextArea("")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="chat-input">
            <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)}/>
            <button className="secondary-button">Submit</button>
        </div>
    )
}

export default ChatInput