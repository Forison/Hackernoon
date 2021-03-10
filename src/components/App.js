import '../stylesheet/App.css';
import Navbar from './Navbar/Index';
import Footer from './Footer/Footer';
import Main from '../containers/Main';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
       <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
