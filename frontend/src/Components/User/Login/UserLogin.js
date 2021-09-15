import './Style.css'
import React from 'react'

function UserLogin() {
    return (
        <div>
            <section className="ftco-section">
		<div className="container" >
			<div className="row justify-content-center">
				<div className="col-md-12 col-lg-10">
					<div className="wrap d-md-flex">
						<div className="img abc" >
			      </div>
						<div className="login-wrap p-4 p-md-5">
			      	<div className="d-flex">
			      		<div className="w-100">
			      			<h3 className="mb-4">Sign In</h3>
			      		</div>
								<div className="w-100">
									<p className="social-media d-flex justify-content-end">
										<a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook"></span></a>
										<a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter"></span></a>
									</p>
								</div>
			      	</div>
							<form action="/login" method="post" className="signin-form">
			      		<div className="form-group mb-3">
			      			<label className="label" for="name">Email</label>
			      			<input required type="email" name="emailid" className="form-control" placeholder="email" required />
			      		</div>
		            <div className="form-group mb-3">
		            	<label className="label" for="password">Password</label>
		              <input required type="password" name="password" className="form-control" placeholder="Password" required />
		            </div>
		            <div className="form-group">
		            	<button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign In</button>
		            </div>
		            <div className="form-group d-md-flex">
		            	<div className="w-50 text-left">
			            	<label className="checkbox-wrap checkbox-primary mb-0">Remember Me
									  <input type="checkbox" checked />
									  <span className="checkmark"></span>
										</label>
									</div>
									<div className="w-50 text-md-right">
										<a href="#">Forgot Password</a>
									</div>
		            </div>
		          </form>
		          <p className="text-center">Not a member? <a href="/signup">Sign Up</a></p>
		        </div>
		      </div>
				</div>
			</div>
		</div>
	</section>
        </div>
    )
}

export default UserLogin
