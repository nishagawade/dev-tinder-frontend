import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests, removeRequest } from './utils/requestSlice'

const Requests = () => {

    const dispatch = useDispatch();
    const requests = useSelector((store) => store.requests)

    const fetchRequests = async () => {

        try {
            const res = axios.get('http://localhost:3001/user/requests/received', {
                withCredentials: true
            })

            dispatch(addRequests(res.data.data))
        } catch (err) {
            console.log(err)
        }
    }

    const reviewRequest = async (status, _id) => {
        try {
            const res = axios.post(
                "http://localhost:3001/request/review/" + status + "/" + _id,
                {},
                { withCredentials: true }
            );
            dispatch(removeRequest(_id));
        } catch (err) { }
    };

    useEffect(() => {
        fetchRequests()
    }, [])
    if (!requests) return

    if (requests.length === 0) return <h1>No requests found</h1>
    return (
        <div className='flex justify-center my-10'>
            <h1 className='text-bold text-2xl'>Connections</h1>
            <div>
                {requests.map((request) => {
                    const { _id, fromUserId } = request;
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
                            <div>
                                <button
                                    className="btn btn-primary mx-2"
                                    onClick={() => reviewRequest("rejected", request._id)}
                                >
                                    Reject
                                </button>
                                <button
                                    className="btn btn-secondary mx-2"
                                    onClick={() => reviewRequest("accepted", request._id)}
                                >
                                    Accept
                                </button>
                            </div>
                        </div>
                    );
                })}

            </div>

        </div>
    )
}

export default Requests
