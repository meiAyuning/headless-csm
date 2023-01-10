import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import UserLayout from '../../components/user/UserLayout';

const Register = () => {
    const router = useRouter();
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userData);
        try {
            await
                axios

                    .post('http://localhost:1337/api/auth/local/register', {
                        username: userData.username,
                        email: userData.email,
                        password: userData.password,
                    })
                    .then(response => {
                        // Handle success.
                        console.log('Well done!');
                        console.log('User profile', response.data.user);
                        console.log('User token', response.data.jwt);
                        router.push('/auth/sign-in')
                    })
                    .catch(error => {
                        // Handle error.
                        console.log('An error occurred:', error.response);
                    });

        } catch (e) {
            console.log(e.message);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    return (
        <UserLayout>
            <div className="container mt-5 pt-2">
                <form className="form-control w-25 mt-4 mx-auto" onSubmit={handleSubmit}>
                    <h3>Sign Up</h3> <hr />
                    <label > Username</label>
                    <input className='form-control mb-2' type="text" name="username" onChange={e => handleChange(e)} />
                    
                    <label >Email</label>
                    <input className='form-control mb-2' type="text" name="email" onChange={e => handleChange(e)} />  
                    <label >Password</label>
                    <input className='form-control mb-2' type="password" name="password" onChange={e => handleChange(e)} />
                    
                    <div className='d-flex flex-row-reverse'>
                            <button className="btn btn-primary">
                                Sign Up
                            </button>
                        </div>
                </form>
            </div>
        </UserLayout>
    )
}

export default Register;