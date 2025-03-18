import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
    
      <div className='heading'>
        
        <div class='box'>
          <form>
            <div className='innerbox'>
              <h1 className="h">Registration Form</h1>
            <div class='cont'>      
            <label for='fname'>First name:</label>
            <input type='text' className='fname' placeholder='First Name' ></input>
            </div>
            <br></br>
            <div className='cont'>  
            <label for='lname'>Last Name:</label>
            <input type='text' className='lname'  placeholder='Last Name'></input>
            </div>
            <br></br>
            <div className='cont'>  
            <label for='s'>Gender:</label>
            <select className='s'  placeholder='gen'>
              <option value='gender'>Gender</option>
              <option value='male'>male</option>
              <option value='female'>female</option>
            </select>
            </div>
            <br></br>
            <div className='cont'>  
            <label for='age'>Age:</label>
            <input type='text' className='age'  placeholder='age'></input>
            </div>
            <br></br>
            <div className='cont'>  
             <label for='email'>Email:</label>
            <input type='email' className='email'  placeholder='Email'></input>
            </div>
            <br></br>
            <div className='cont'>  
            <label for='address'>Address:</label>
            <input type='text' className='address'  placeholder='Address'></input>
            </div>
            <br></br>
            <div className='cont'>  
            <label for='pass1'>Password:</label>
            <input type='password' className='pass1'  placeholder='.....'></input>
            </div>
            <br></br>
            <div className='cont'>  
            <label for='pass2'>Confirm Password:</label>
            <input type='password' className='pass2' placeholder ='.....'></input>
            </div>
            <br></br>
            <div className='extra'>
            <input type='checkbox' className='i1'></input>
            <p className='i1'>By creating your Account you are accepting our terms and conditions</p>
            </div>   
            <button className='create'>Create Account</button>
            </div>
            
          </form>
          
          </div>
        </div>
     
    </>
  )
}

export default App
