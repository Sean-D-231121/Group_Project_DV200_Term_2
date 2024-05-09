import './Splash.css';
import Logo from './Logo.png';
import { Link } from 'react-router-dom';

const SignIn = () =>{

    return(
        <div>
            <Link to='../'><h1 className='arrow'>⇦</h1></Link>
            <h1 className='signuph1'>Welcome Back!</h1>
            <img className='signimage2' src={Logo} alt='' width={100} />
            <div className='signupblock2'>
            
                <h1 className='signh1'>Sign In</h1>
                <div className='signupdiv1'>
                    <p className='signuptext'>Username</p>
                    <input className='signupinput'></input>
                </div>
                <div className='signupdiv1'>
                    <p className='signuptext'>Password</p>
                    <input className='signupinput'></input>
                </div>
        
                <Link to='../Home'><button className='signupbutton'>Sign In</button></Link>
            </div>
        </div>
    )

}
export default SignIn
