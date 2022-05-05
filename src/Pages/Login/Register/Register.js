import { default as React, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';
 

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user, error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate()

    if (error) {
        return (<p>Error: {error.message}</p>);
    }
    if (user) {
        navigate('/home')
    }

    return (
        <div className='register-form w-50'>
            <h2 className='text-center'> Please Register</h2>
            <form   >
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter your name'
                />




                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter your password'
                    required
                />



                <p className='text-danger'>{error}</p>
                <input onClick={() => setAgree(!agree)} className='mb-4' type="checkbox" name="terms" id="terms" />

                <label className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="terms">Accept Terms and Conditions</label>
                <button disabled={!agree} onClick={() => createUserWithEmailAndPassword(email, password)}>
                    Register
                </button>

                {/* <input disabled={!agree} className='form-submit w-50 mx-auto btn btn-primary' type="submit" value="Register" /> */}
            </form>
            <p>আপনার কি আগেই আছে?<Link to="/login" className='text-primary pe-auto text-decoration-none'  > ক্লিক করুন</Link></p>

             
          <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;







// const Register = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');
//     const [
//         createUserWithEmailAndPassword,
//         user,error,
//     ] = useCreateUserWithEmailAndPassword(auth);

//     const navigate =useNavigate()

//     if (error) {
//         return (<p>Error: {error.message}</p>);
//     }
//     if (user) {
//        navigate('/login')
//     }
//     return (
//         <div className='className='register-form w-50>
//             <h1 className='text-center'>Please Register</h1>
//             <form >
                // <input
                //     type="text"
                //     value={name}
                //     onChange={(e) => setName(e.target.value)}
                //     placeholder='Enter your name'
                // />
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder='Enter your email'
//                     required
//                 />
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder='Enter your password'
//                     required
//                 />
//                 <button className='button' onClick={() => createUserWithEmailAndPassword(email, password)}>
//                     Register
//                 </button>
//                 <p className='text-center'> Already have an Account? <Link className='text-decoration-none' to='/login'>Please Login</Link></p>
//             </form>
//             <SocialLogin></SocialLogin>
//         </div>
//     );
// };

// export default Register;


 