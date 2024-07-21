// import Button from "./Button";
import './Navbar.css'
import logo from '../assets/welcome.png'
// const Navbar = ({ onLoginClick, onRegisterClick }) => {
    const Navbar = ({ setView }) => {
    return (
       <div className="nav">
        <div className="Left">
            <img src={logo} alt="Logo" className="logoImg"></img>
        </div>
        <div className="right">

       
 <div>
        <button onClick={() => setView("register")}>Register</button>
        <button onClick={() => setView("login")}>Login</button>
      </div>
        
            
        </div>
       </div>
    );
}
export default Navbar


// Navbar.js

// import React from 'react';

// const Navbar = ({ onLoginClick, onRegisterClick }) => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container">
//         <a className="navbar-brand" href="/">My App</a>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <button className="btn btn-link nav-link" onClick={onRegisterClick}>Register</button>
//             </li>
//             <li className="nav-item">
//               <button className="btn btn-link nav-link" onClick={onLoginClick}>Login</button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
