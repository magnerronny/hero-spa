import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate, useLocation } from "react-router-dom"
import PropTypes from 'prop-types'
export const PrivateRouter = ({children}) => {
  const {logged} = useContext(AuthContext);
  const { pathname , search} = useLocation();

  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath);
  console.log('re-renderrrrrrrrr')

  return (logged)
    ? children
    :<Navigate to="/login" />
}

PrivateRouter.propTypes = {
  children: PropTypes.object
}