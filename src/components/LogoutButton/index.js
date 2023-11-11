// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const onlogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div className="logout-cont">
      <button type="button" onClick={onlogout}>
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
