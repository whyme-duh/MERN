import Navbar from "../../components/Navbar/navbar";
import background from './bg.jpg';
import './home.css';

const Home = () => {
    return (
        <>
        <div className="container">
            <img src={background} alt="background" className='bg-img'/>
            <h5 class=''>Featured Products</h5>
        </div>
        
        </>
    );
}

export default Home;