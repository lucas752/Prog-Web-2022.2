import { Navigate, Outlet } from "react-router-dom"

const useAuth=()=>{
    const user= JSON.parse(localStorage.getItem("editaisupe"));
    if(user){
      return true
    } else {
      return false
    }
  }

export const PrivateRoute = () => {
    const auth = useAuth();
    return auth ? < Outlet /> : <Navigate to="/"/>;
}