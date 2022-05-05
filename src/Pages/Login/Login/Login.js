import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    
    let errorElement;

    let from = location.state?.from?.pathname || '/'

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail ] = useSendPasswordResetEmail(
        auth
    );

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>


    }

    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // console.log(email, password);
        signInWithEmailAndPassword(email, password)
    }

    const navigateRegister = event => {
        navigate('/register')
    }

    const resetPassword = async() =>{
        const email = emailRef.current.value;
       if(email){
        await sendPasswordResetEmail(email);
        toast('send email');
       }
       else{
           toast('please enter your email')
       }

    }


    return (
        <div className='container w-50 mx-auto '>
            <h2 className='text-dark text-center mt-5'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                
               
               <Button className='bg-primary w-50 mx-auto d-block mb-2' type="submit">Login</Button>
             
            </Form>
            {errorElement}
            <p className='mx-auto'>আপনি এখানে নতুন?    <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>ক্লিক করুন</Link></p>
            <p className='mx-auto'>আপনি কি পাসওয়ার্ড ভুলে গেছেন?    <button   className=' btn btn-link text-primary ps-auto text-decoration-none' onClick={resetPassword}>পাসওয়ার্ড রিসেট দিন</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />


        </div>
    );
};

export default Login;




