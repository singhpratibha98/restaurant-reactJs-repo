import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import RestaurantCard from './Components/RestaurantCard';


function App() {
  return (
    <div className="App">
      
      <Header/>
      <Main/>
      <RestaurantCard/>

    </div>
  );
}

export default App;
