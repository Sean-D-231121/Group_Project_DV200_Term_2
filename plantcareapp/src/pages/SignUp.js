import './Splash.css';
import Logo from './Logo.png';
import { Link } from 'react-router-dom';

const SignUp = () =>{
    return(
        <div>
            <Link to='../'><h1 className='arrow'>⇦</h1></Link>
            <h1 className='signuph1'>Welcome!</h1>
            <img className='signimage' src={Logo} alt='' width={100} />
            <div className='signupblock'>
            
                <h1 className='signh1'>Sign Up</h1>
                <div className='signupdiv1'>
                    <p className='signuptext'>Name & Surename</p>
                    <input className='signupinput'></input>
                </div>
                <div className='signupdiv1'>
                    <p className='signuptext'>Username</p>
                    <input className='signupinput'></input>
                </div>
                <div className='signupdiv1'>
                    <p className='signuptext'>Email</p>
                    <input className='signupinput'></input>
                </div>
                <div className='signupdiv1'>
                    <p className='signuptext'>Password</p>
                    <input className='signupinput'></input>
                </div>
                <div className='signupdiv1'>
                    <p className='signuptext'>Confirm Password</p>
                    <input className='signupinput'></input>
                </div>
                <Link to='./Home'><button className='signupbutton'>Sign Up</button></Link>
            </div>
        </div>
    )
}
export default SignUp