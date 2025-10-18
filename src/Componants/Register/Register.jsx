import { createUserWithEmailAndPassword, } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Firebase/Firebase.init';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';


const Register = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        console.log(terms)

        const passwordRegex = /^.{6,}$/;
        if (!passwordRegex.test(password)) {
            console.log('password didnt match')
            setError('password must be 6 character or longer')
            return;
        }



        // reset error
        setError('');
        setSuccess(false);

        if(!terms){
            setError('please accept our terms and conditions')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log('after creation of', result.user)
                setSuccess(true)
                e.target.reset();
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })

    }
    const handleTogglePassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword)
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <div className='relative'>
                                    <input type={showPassword ? 'text' : 'password'} name='password' className="input" placeholder="Password" />
                                    <button onClick={handleTogglePassword} className="btn btn-xm absolute -ml-10">{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}

                                    </button>
                                </div>
                                <div>
                                    <label class="label">
                                        <input type="checkbox" name="terms"
                                        class="checkbox" />
                                        Accept Our Terms and Condition
                                    </label>
                                </div>
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                            {
                                success && <p className='text-green-500'>Account created successfully</p>
                            }
                            {
                                error && <p className='text-red-500'>{error}</p>
                            }
                        </form>
                        <p>Already have an account?Please  <Link className='text-blue-600 underline' to="/login">login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;