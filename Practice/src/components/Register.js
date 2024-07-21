// import React, { useState } from "react";
// import {ToastContainer, toast} from 'react-toastify'


// const Register = ({setView}) => {
//     const [email, setEmail] = useState('');
//     const [password,setPassword] = useState('');
//     const [userName, setUserName] = useState('')
    
//     console.log(email);
//     const payLoad = {userName, email, password}
//     console.log(payLoad)
//    const handleSubmit = () =>{     
//         if(email !== '' && password !== '' && userName !== ''){
//           console.log(email);
//           toast.success('loggin success');
//           setTimeout(()=>{
//             setView("login");
//           },2000);
//         }else{
//             toast.error('error while register')
//         }
//     }
//   return (
//     <div className="container-fluid">
//       {/* <form onSubmit={handleSubmit}> */}
//       <h3>Register form</h3>
//       <div>
//       <div className="form-group">
//           <label forhtml="exampleInputEmail1">User Name</label>
//           <input
//             htmltype="text"
//             className="form-control"
//             id="exampleInputName"
//             aria-describedby="userNameHelp"
//             placeholder="Enter User name"
//             name="email"
//             onChange={(e)=>setUserName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label forhtml="exampleInputEmail1">Email address</label>
//           <input
//             htmltype="text"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             placeholder="Enter email"
//             name="email"
//             onChange={(e)=>setEmail(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label for="exampleInputPassword1">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="exampleInputPassword1"
//             placeholder="Password"
//             onChange={(e)=>setPassword(e.target.value)}
//           />
//         </div>
//         {/* <button htmltype="submit" className="btn btn-primary">
//           Submit
//         </button> */}
//         <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
//       {/* </form> */}
//         <div className="mt-3">
//             <p>Your Name : {userName}</p>
//             <p>Your Email {email}</p>
//             <p>Password {password}</p>
//         </div>
//         </div>
//         <ToastContainer />
//     </div>
//   );
// };

// export default Register;


import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = ({ setView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

const payLoad={ userName,email,password};

  const handleSubmit = () => {
    if (email !== '' && password !== '' && userName !== '') {
      toast.success('Registration successful');
      setTimeout(() => {
        setView("login");
      }, 2000);
      const userData=localStorage.setItem("user",JSON.stringify(payLoad));
    
      console.log("userData from LocalStorage",userData);
    } else {
      toast.error('Error while registering');
    }
  }

  return (
    <div className="container-fluid" >
      <div className="row justify-content-center mt-5">
        <div className="col-md-6" >
          <div className="card" style={{ backgroundColor: 'aqua'}}>
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Register Form</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputName">User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    placeholder="Enter User name"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="button" onClick={handleSubmit} className="btn btn-primary btn-block">Submit</button>
              </form>
              <div className="mt-3">
                <p>Your Name: {userName}</p>
                <p>Your Email: {email}</p>
                <p>Password: {password}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
