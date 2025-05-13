import React from 'react'
import { useParams } from 'react-router-dom'

const Chat = () => {

  const {targetUserId} = useParams()
  return (
    <div>
     <h1 className='p-5 border-b border-gray'>chat</h1>
    </div>
  )
}

export default Chat
