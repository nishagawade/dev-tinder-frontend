import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { removeUser } from './utils/userSlice';

const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:3001/logout', {}, {
                withCredentials: true
            })
            //we need to remove user from the redux store
            dispatch(removeUser());
            return navigate('/login')
        } catch (err) {
            console.log(err)
        }
    }

    const user = useSelector((store) => store.user);
    console.log(user)
    return (
        <div className="navbar bg-base-200 shadow-sm">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost text-xl">daisyUI</Link>
            </div>

            {user &&
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <p>{user.firstName}</p>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <Link to='/profile' className="justify-between">
                                    Profile

                                </Link>
                            </li>
                            <li><Link to='/connections'>connections</Link></li>
                            <li><Link to='/requests'>Requests</Link></li>
                            <li>
                                <Link to="/premium">Premium</Link>
                            </li>
                            <li><a onClick={handleLogout}>Logout</a></li>
                        </ul>
                    </div>
                </div>
            }

        </div>
    )
}

export default Navbar
