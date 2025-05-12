import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from './utils/connectionSlice'

const Connections = () => {

    const connections = useSelector((store) => store.connections);
    console.log("connections", connections)
    const dispatch = useDispatch()

    const fetchConnections = async () => {

        try {
            const res = await axios.get('http://localhost:3001/user/connections', {
                withCredentials: true
            });

            console.log(res.data.data)
            dispatch(addConnections(res.data.data))
        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        fetchConnections()
    }, [])

    if (!connections) return
    return (
        <div className='flex justify-center my-10'>
            <h1 className='text-bold text-2xl'>Connections</h1>
            <div>
                {connections.map((connection) => {
                const { _id, fromUserId } = connection;
                const { firstName, lastName } = fromUserId;

                return (
                    <div
                        key={_id}
                        className="flex m-4 p-4 rounded-lg bg-base-300  mx-auto my-5"
                    >
                        <div>
                            <img
                                alt="photo"
                                className="w-20 h-20 rounded-full object-cover"
                            src="https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
                            />
                        </div>
                        <div className="text-left mx-4 ">
                            <h2 className="font-bold text-xl">
                                {firstName + " " + lastName}
                            </h2>
                          
                           
                        </div>
                        {/* <Link to={"/chat/" + _id}>
              <button className="btn btn-primary">Chat</button>
            </Link> */}
                    </div>
                );
            })}

            </div>
            
        </div>
    )
}

export default Connections
