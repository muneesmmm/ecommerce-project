import React from 'react'
import './Style.css'
function Signup() {
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
                                <form action="/signup" method="post" class="signin-form" enctype="multipart/form-data">

                                    <div class="input-group my-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroupFileAddon01">Upload your Photo</span>
                                        </div>
                                        <div class="custom-file">
                                            <input required type="file" name="dp" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                                        </div>
                                    </div>

                                    <div class="form-group mb-3">
                                        <label class="label" for="name">Username</label>
                                        <input required type="text" name="username" class="form-control" placeholder="Username" required />
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="label" for="name">Email</label>
                                        <input required type="email" name="emailid" class="form-control" placeholder="email" required />
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="label" for="password">Password</label>
                                        <input required type="password" name="password" class="form-control" placeholder="Password" required />
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="form-control btn btn-primary rounded submit px-3">Sign In</button>
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
