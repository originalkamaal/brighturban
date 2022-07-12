import React from 'react'
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { useForm } from '../../utils/hooks/useForm';
import { useMutation } from '@apollo/client';

import { gql } from 'graphql-tag';
import { Link, useNavigate } from 'react-router-dom';

const LOGIN_USER = gql`
    mutation Mutation(
        $values : LoginInput
    ) {
        loginUser(credentials : $values){
            firstname
            lastname
            email
            mobile
            usertype
            emailverified
            mobileverified
            token
        }
    }
`

export default function Login(props) {

    let navigate = useNavigate();
    const context = useContext(AuthContext);
    const [errors, setError] = useState([]);

    function loginUserCallBack() {
        console.log(values)
        loginUser();
    }

    const { onChange, onSubmit, values } = useForm(loginUserCallBack, {
        user: null,
        password: ''
    });


    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(proxy, { data: { loginUser: userData } }) {
            context.login(userData);
            navigate('/');
        },
        onError({ graphQLErrors }) {
            setError(graphQLErrors);
        },
        variables: {
            values
        }

    })

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={onSubmit} action="#">
                                <div>
                                    <label htmlFor="user" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email or mobile</label>
                                    <input onChange={onChange} type="text" name="user" id="user" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input onChange={onChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>

                                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 duration-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Log In</button>
                                <Link to="/password-recovery"><p className='hover:underline hover:text-blue-600 text-xs p-2 flex flex-row justify-end'>Forgot password?</p></Link>
                                <div>
                                    {errors.map((error, i) => {
                                        return (
                                            <div className='flex w-full items-center justify-center text-red-500  px-6 pb-3  font-bold text-xs' key={i} >
                                                Error: {error.message}
                                            </div>
                                        )
                                    })}
                                </div>

                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    New on BrightUrban? crete an account. <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">here</Link>
                                </p>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
