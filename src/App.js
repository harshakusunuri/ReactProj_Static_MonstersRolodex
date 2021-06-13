import logo from './logo.svg';
import './App.css';
import HomeComponent from './HomeComponent'; 

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <div class='home'>
          <span class='child'> VEG</span>
          <span class='child'>NON_VEG</span>

        </div>


  </header> */}
    <HomeComponent  increment={1}/>
  
    </div>
  );
}

export default App;
