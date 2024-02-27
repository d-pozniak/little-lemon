import styles from './App.module.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Routing from "./components/Routing";

function App() {
  return (
    <div className={styles.container}>
        <Header/>
        <Routing/>
        <Footer/>
    </div>
  );
}

export default App;
