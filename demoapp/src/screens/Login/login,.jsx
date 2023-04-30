import {Link} from 'react-router-dom';

const Login= () => {
    return (
        <>
        <div className="container w-25 mt-5">
        <form action="">
        <div className="form-group">
            <h5 className="text-center">Login</h5>

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
            />
          </div>
          
          <button
            type="submit"
            className="btn btn-primary mt-3 w-100"
          >
            Register
          </button>
        </form>

        <p className='mt-5'>Don't have account? <Link to ='/register'>Register Now.</Link></p>
        </div>
        
        </>
    );
}

export default Login;