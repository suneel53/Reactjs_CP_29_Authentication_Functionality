// Write your JS code here
import Header from '../Header'
import LogoutButton from '../LogoutButton'

import './index.css'

const Home = () => {
  console.log('Home')
  return (
    <div className="home-cont">
      <Header />
      <h1>Home Route</h1>
      <LogoutButton />
    </div>
  )
}

export default Home
