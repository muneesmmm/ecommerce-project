import React, { useState } from 'react'
import axios from 'axios'
import './Style.css'
function Signup() {
    const[user , setUser] = useState({
        username :"",
        email: "",
        password: ""    
    })
    const handleChange = e =>{
        const { name , value }=e.target
        setUser({
            ...user,
            [name]: value
        })
      
    }

    const register = ()=>{
        const {name , email ,password} = user
        if(name && email && password){
            axios.post("/api/Store/Signup", user).then(res => console.log(res))
        }else{
            alert("invalid")
        }
        
    }

    return (
        <div>
            <div class="container">

                <div class="row justify-content-center mt-5">
                    <div class="col-md-12 col-lg-10">
                        <div class="wrap d-md-flex">
                            <div class="img">
                            </div>
                            <div class="login-wrap p-4 p-md-5">
                                <div class="d-flex">
                                    <div class="w-100">
                                        <h3 class="mb-4">Sign Up</h3>
                                    </div>
                                    <div class="w-100">
                                        <p class="social-media d-flex justify-content-end">
                                            <a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a>
                                            <a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a>
                                        </p>
                                    </div>
                                </div>
                                <form class="signin-form" enctype="multipart/form-data">

                                    <div class="form-group mb-3">
                                        <label class="label" for="name">Username</label>
                                        <input required type="text" name="username" class="form-control" placeholder="Username" value={user.username} onChange={ handleChange } required />
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="label" for="name">Email</label>
                                        <input required type="email" name="email" class="form-control" placeholder="email" value={user.email} onChange={ handleChange } required />
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="label" for="password">Password</label>
                                        <input required type="password" name="password" class="form-control" placeholder="Password" value={user.password} onChange={ handleChange } required />
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="form-control btn btn-primary rounded submit px-3" onClick={register}>Sign In</button>
                                    </div>
                                    <div class="form-group d-md-flex">
                                        <div class="w-50 text-left">
                                            <label class="checkbox-wrap checkbox-primary mb-0">Remember Me
                                                <input type="checkbox" checked />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
