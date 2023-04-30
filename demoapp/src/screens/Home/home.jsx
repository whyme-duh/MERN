import background from './bg.jpg';
import './home.css';
import {testApi } from '../../api/api';
import {useEffect} from 'react';

const Home = () => {

    useEffect(() => {
        testApi().then((res) => {
          console.log(res);
        });
      }, []);

    
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