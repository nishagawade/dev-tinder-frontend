import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from './utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handlelogin = async () => {

        try {

            const res = await axios.post('http://localhost:3001/login', {
                emailId,
                password
            }, { withCredentials: true }) //

            dispatch(addUser(res.data))  //dispatch will call action and add the data into the adduser function in reducer
            navigate('/feed')



        } catch (err) {
            setError(err?.response?.data || "Something went wrong");
        }


    }


    return (
        <div className='flex justify-center my-10'>
            <div className="card card-border bg-base-300 w-96">
                <div className="card-body">
                    <h2 className="card-title justify-center">Login</h2>
                    <div className='py-4'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend ">Email</legend>
                            <input type="text"
                                className="input w-full"
                                placeholder="Type here"
                                value={emailId}
                                onChange={(e) => setEmailId(e.target.value)}
                            />

                        </fieldset>

                        <fieldset className="fieldset my-4">
                            <legend className="fieldset-legend ">Password</legend>
                            <input type="text"
                                className="input w-full"
                                placeholder="Type here"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                        </fieldset>
                    </div>
                    <p className="text-red-500">{error}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={() => handlelogin()}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
