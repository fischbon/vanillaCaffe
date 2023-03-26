//npm i react-router-dom@6 in index.js (import{BrowserRouter} from 'react-router-dom)
import "./App.css"
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";


function App() {
  document.title="Vanilla Caffe"
  return (
    <div>
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
