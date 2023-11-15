import { useState } from 'react';
import './login.css';
import welcomeImg from '../assets/login-welcome.png';
import facebookImg from '../assets/facebook.png';
import googleImg from '../assets/search.png';
import countryCodes from '../components/countryCodes';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [mobileNum, setMobileNum] = useState('');
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [storedMobileNumbers, setStoredMobileNumbers] = useState(['8507878874']);
  
  const validatePhoneNumber = (number) => {
    return /^[0-9]{10}$/.test(number);
  };


  const Navigate = useNavigate();


  const handleOnchangeNumber = (event) => {
    const number = event.target.value;
    setMobileNum(number);
    const isValid = validatePhoneNumber(number);
    setIsValidPhoneNumber(isValid);
  };

  const inputStyle = isValidPhoneNumber
    ? { borderColor: 'green' }
    : { borderColor: 'red' };



  const saveMobileNumber = () => {

    if (isValidPhoneNumber && mobileNum !== '') {
      if (!storedMobileNumbers.includes(mobileNum)) {
        Navigate('/sign')
      }
      else {
        if (storedMobileNumbers.includes(mobileNum)) {
          console.log('Mobile number is already stored')
        }
        setStoredMobileNumbers([...storedMobileNumbers, mobileNum]);
        setMobileNum('');// Clear the input field after saving
      }

    }
  };





  return (
    <div className="login login-container">
      <div className="login-box-left">
        <h2 className='login-welcome-txt'>Welcome to the world of Bewakoof<sup className='sup-r'>®</sup>! </h2>
        <img src={welcomeImg} alt="" className='login-welcome-img' />
      </div>

      <div className="login-box-right">
        <div className="right-box-1">
          <h2>Log in / Sign up</h2>
          <p>for Latest trends, exciting offers and everything Bewakoof<sup className='sup-r-1'>®</sup>!</p>
        </div>

        <div className="right-box-2">
          <form className='form'>
            <div className="form-box-input form-box" style={inputStyle}>
              <select className='countrycode-select mobCode'>
                {countryCodes.map((country, index) => (
                  <option key={index} value={country.code}>
                    {country.name} ({country.code})
                  </option>
                ))}
              </select>
              <input
                type='tel'
                id="mobileNum"
                placeholder='Enter Your Number'
                value={mobileNum}
                onChange={handleOnchangeNumber}
              
              />
            </div>
            <button className="form-box-continue form-box" type='button' onClick={saveMobileNumber}>
              Continue
            </button>
          </form>
        </div>
        <div className="right-box-3">
          <span>OR</span>
        </div>

        <div className="right-box-4">
          <div className="continue-with-gml">
            <i className="fa-regular fa-envelope" />
            <p className='fontsize-of-p'>Continue with Gmail</p>
          </div>
          <div className="continue-with-goog">
            <img src={googleImg} alt="googleImglogo" />
            <p className='fontsize-of-p'>Google</p>
          </div>
          <div className="continue-with-fb">
            <img src={facebookImg} alt="facebookImage logo" />
            <p className='fontsize-of-p'>Facebook</p>
          </div>
        </div>
        <div className="right-box-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <span className='highlight-span'>terms</span>Neque unde pariatur non quaerat <span className='highlight-span'>term & condition</span>maxime consectetur
          </p>
        </div>
      </div>
    </div>
  );
}
