import '../stylesheet/App.css';
import Navbar from '../components/Navbar/Index';
import Footer from '../components/Footer/Footer';
import Main from '../components/Main';
import React, { useEffect, useState  } from 'react';
import DATA from '../store/step-by-step-guide-to-create-3-different-types-of-loading-screens-in-react-lu2633nd.json';
import ReactLoading from 'react-loading';
import useScrollPosition from '@react-hook/window-scroll';

const App = () => {
  const [stores, setStores] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const scrollY = useScrollPosition(60);

  useEffect(()=>{
    setIsloading(true);
    setTimeout(() => {
      setStores(DATA);
      setIsloading(false)
    }, 4000);
  }, []);

  return (
    <>
    {!isLoading ? 
      <>
        <header>
          <Navbar scroll ={scrollY}/>
        </header>
        <main>
         <Main store={stores}/>
        </main>
        <footer>
          <Footer />
        </footer>
      </>
      :
        <div className="loading-screen">
          <div className="screen-wrap d-block mx-auto align-middle ">
            <ReactLoading type={"bars"} color={"#00ff00"}  width={100} />
        </div>
      </div> 
    }
    </>
  );
}

export default App;
