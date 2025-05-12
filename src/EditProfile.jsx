import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from './utils/userSlice';

const EditProfile = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
     const dispatch = useDispatch()

    const saveProfile = async () => {

       

        try {

            const res = await axios.patch('http://localhost:3001/profile/edit', {
                firstName,
                lastName,
                // emailId,
                // photoUrl,
                // age,
                // about,
                // skills

            } , {
                withCredentials : true
            })

            dispatch(addUser(res.data.data))

        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <div className='flex justify-center my-10'>
                <div className="card card-border bg-base-300 w-96">
                    <div className="card-body">
                        <h2 className="card-title justify-center">Edit Profile</h2>
                        <div className='py-4'>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend ">First Name</legend>
                                <input type="text"
                                    className="input w-full"
                                    placeholder="Type here"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />

                            </fieldset>

                            <fieldset className="fieldset my-4">
                                <legend className="fieldset-legend ">Last Name</legend>
                                <input type="text"
                                    className="input w-full"
                                    placeholder="Type here"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />

                            </fieldset>
                        </div>

                        <div className="card-actions justify-center">
                            <button className="btn btn-primary"
                            onClick={() => saveProfile()}
                            >Save Profile</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EditProfile
