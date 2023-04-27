import Navbar from "../../components/Navbar/navbar";
const Register = () => {
    return (
        <>
        <div className="container d-flex flex-column justify-content-center mt-5 ">
            <h5 >Register It Now!</h5>
            <form action="/action_page.php" className = "mt-3 w-50">
                <div class="form-group">
                    <label for="text">First Name :</label>
                    <input type="text" class="form-control" id="email"/>
                </div>
                <div class="form-group">
                    <label for="text">Last Name :</label>
                    <input type="text" class="form-control" id="email"/>
                </div>
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" id="email"/>
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd"/>
                </div>
                
                <button type="submit" class="btn btn-success mt-3">Submit</button>
            </form>
        </div>        
        </>
    );
}

export default Register;