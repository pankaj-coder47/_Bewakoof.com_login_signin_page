/* eslint-disable react/no-unescaped-entities */
import './sign.css'
import SignImg from '../assets/sign-in.png'



export default function Sign() {
  return (
    <div className='sign-container'>
      <div className="container-grid">
        <div className="left-part">
          <div className="image-container">
            <img src={SignImg} alt="offer-With_sign-image" />
          </div>
        </div>
        <div className="right-part">
          <div className="right-box">

            <div className="text-sign">
              <h2>Sign Up</h2>
              <p>Hii new buddy, let's get you started with the bewakoof! </p>
            </div>


            <form className='input-form'>
              <input type="text"  id="namerId" className='name-text common-span' placeholder='Name' />
              <div className="mobile">
              <input type="moblie"  id="namerId" className='mob-text common-span' placeholder='Mobile'/>
              </div>
              <input type='email'  id="namerId" className='email-text common-span' placeholder='Email Id'/>
              
              <input type="password"  id="namerId" className='password-text common-span' placeholder='Password' />

              <div className="checkbox">
                <input type="checkbox" name="" id="" />
                <p>I wants to recieve order update on What'sapp</p>
              </div>
              <button type='submit' className='proceed-btn'>proceed</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
