import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider';
// import { getLocalStorage, setLocalStorage } from './utils/localStorage'

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const Authdata = useContext(AuthContext); 
  useEffect(() => {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if(loggedInUser){
         const userData = JSON.parse(loggedInUser);
         // setUser(userData.role);
         setLoggedInUserData(userData.data)
         
      }
    
  }, [])
 
  
  const handleLogin = (email,password)=>{
     if(email === 'admin@me.com' && password === '123'){
      setUser('admin');
      console.log(user);
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
     }
     else if(Authdata){
      const employee = Authdata.employees.find((e)=>email == e.email && e.password == password);
         if(employee){
            setUser('employee');
            setLoggedInUserData(employee)
            localStorage.setItem('loggedInUser',JSON.stringify({role:'employees', data:employee}))
            console.log(user) ;
         } 
          
     }
     
     else{
      alert("Invalid Credentials");
     }
  };

  return (
     <>
     
     {!user ? <Login handleLogin={handleLogin}/> : 
     (user === 'admin' ?   <AdminDashboard changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null) )}
     <div>
      
     </div>
     </>
      
  )
}

export default App
