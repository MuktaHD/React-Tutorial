

import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);


let userData=localStorage.getItem('user');

userData = JSON.parse(userData)
console.log("Email:-",userData.email);
console.log("Password:-",userData["password"]);


    const handleSubmit = () => {     
        if(email !== '' && password !== ''){
          setIsLoggedIn(true);
        }
    }

    return (
        <div className="container-fluid" style={{ backgroundColor: '#f7d4e3', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title text-center mb-4">Login</h3>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                            <button type="button" onClick={handleSubmit} className="btn btn-primary btn-block">Submit</button>
                        </form>
                        <div className="mt-3">
                            <p>Your Email: {email}</p>
                            <p>Password: {password}</p>
                        </div>
                        {isLoggedIn ? <p className="text-success text-center mt-2">Logging Successfully</p> : <p className="text-danger text-center mt-2">Please Log in</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
