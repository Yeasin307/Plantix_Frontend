import { Outlet } from 'react-router-dom'
import Profile from './Profile'

const Home = () => {
    return (
        <>
            <Outlet />
            <Profile />
        </>
    )
}

export default Home