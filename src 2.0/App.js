import banner from '../src/images/banner.svg';
import landingImage from '../src/images/landing-charts.svg';
import landingLeft from '../src/images/landing-left-side.svg';
import orangeButton from '../src/images/orange-button.svg';
import './App.css';

function App() {
  return (

    <div className="App">
      <img src={banner} className="banner" alt="logo" position="fixed" />
      <br></br>
      <div display='flex' className='center-content'>
       
        <img src={landingImage} position="fixed" display='block' className="landing-image" />
      </div>
    </div>
  );
}

export default App;
