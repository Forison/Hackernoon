import '../stylesheet/App.css';
import Navbar from './Navbar/Index';
import Footer from './Footer/Footer';
import Main from '../containers/Main';
import React, { useEffect, useState  } from 'react';
import DATA from '../store/step-by-step-guide-to-create-3-different-types-of-loading-screens-in-react-lu2633nd.json';
import ReactLoading from 'react-loading';

function App() {
  const [stores, setStores] = useState([]);
  const [isLoading, setIsloading] = useState(true);

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
          <Navbar />
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
