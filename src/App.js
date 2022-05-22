import logo from './logo_transparent1.jpeg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='inputBox'>
          <span>+91</span>
          <input type="text" maxLength="10" id="mobile" placeholder="Enter Mobile Number"></input>
        </div>
        <div className="continueButton" onClick={()=>{
          let m=document.getElementById("mobile").value;
          const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              "token":"717dc2d82d86be210bef206cf512dba9",
              "mobile":{m},
              "action": "Signin_or_Signup",
              "timestamp": 1652446231059
              })
        };
        fetch('https://agcare.platform.simplifii.com/api/v1/get_otp', options)
            .then(response => console.log(response.json()))
            .then(data => console.log(data));
          }}>Continue</div>
      </header>
    </div>
  );
}

export default App;

