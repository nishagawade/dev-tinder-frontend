import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './Body'
import Login from './Login'
import Profile from './Profile'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Feed from './Feed'
import Connections from './Connections'
import Requests from './Requests'
import Premium from './Premium'
import Chat from './Chat'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>

      <Provider store={appStore}>
        <BrowserRouter basename='/'>
          <Routes>
            <Route path='/' element={<Body />} >
              <Route path='/feed' element={<Feed />} />
              <Route path='/login' element={<Login />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/connections' element={<Connections/>} />
              <Route path='/requests' element={<Requests />} />
              <Route path='/premium' element={<Premium />} />
               <Route path='/chat/:targetUserId' element={<Chat/>} />
            </Route>
          </Routes>

        </BrowserRouter>
      </Provider>

    </>

  )
}

export default App
