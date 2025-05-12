import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from './utils/feedSlice'
import UserCard from './UserCard'

const Feed = () => {

  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  console.log("feed", feed)

  const getFeed = async () => {

    try {

      const res = await axios.get('http://localhost:3001/feed', {
        withCredentials: true
      });
      console.log("res",res)
      dispatch(addFeed(res?.data?.data))


    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getFeed()
  }, [])
  return (
    feed && (
      <div className='flex justify-center my-10'>
        <UserCard user={feed[0]} />
      </div>

    )

  )
}

export default Feed
