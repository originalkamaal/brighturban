import React, { useState } from 'react';
import { firebase, auth } from '../utils/firebase';


const Login = () => {
    // Inputs
    const [mynumber, setnumber] = useState("");
    const [otp, setotp] = useState({
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
    });
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState('');

    // Sent OTP
    const signin = () => {

        if (mynumber === "" || mynumber.length < 10) return;

        let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
            setfinal(result);
            alert("code sent")
            setshow(true);
        })
            .catch((err) => {
                alert(err);
                window.location.reload()
            });
    }

    // Validate OTP
    const ValidateOtp = () => {
        if (otp === null || final === null)
            return;
        final.confirm(otp).then((result) => {
            // success
        }).catch((err) => {
            alert("Wrong code");
        })
    }

    const handleChaneOtpInput = (event) => {

        switch (event.target.id) {
            case "first":
                break;
            case "second":
                break;
            case "third":
                break;
            case "fourth":
                break;
            case "fifth":
                break;
            case "sixth":
                break;

            default:
                console.log("none")
                break;
        }
        const selectedIndex = event.key;
        console.log(selectedIndex)

        const form = event.target.form;
        const index = [...form].indexOf(event.target);

        if (index < 5) {

            form.elements[index + 1].focus();
        }
        event.preventDefault();

    };


    return (
        <div className='flex flex-row w-full h-screen justify-center items-center'>

            <div className={`${show ? "hidden" : 'flex flex-row'} w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-purple-700 to-amber-700 bg-red-700`}>
                <form className="p-10 border shadow-md rounded-md w-1/3 bg-white rounded-xl drop-shadow-lg space-y-5" action="">
                    <h1 className="text-center text-3xl font-bold">Sign Up</h1>
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm" id="mobile">Phone</label>
                        <input className="w-full px-3 py-2 rounded-md border border-slate-400" type="mobile" placeholder="Mobile"
                            name="mobile" id="mobile" />
                    </div>

                    <div className='flex flex-row w-full space-x-4'>
                        <button className="w-full px-10 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in" type="submit">
                            Send OTP
                        </button>
                    </div>
                </form>
            </div>


            <div className={`${!show ? "hidden" : 'flex flex-row'} w-full h-screen bg-blue-500 py-20 px-3`}>
                <div className="container mx-auto">
                    <div className="max-w-sm mx-auto md:max-w-lg">
                        <div className="w-full">
                            <div className="bg-white h-64 py-3 rounded text-center">
                                <h1 className="text-2xl font-bold">OTP Verification</h1>
                                <form name='verifyOtp'>

                                    <div className="flex flex-col mt-4">
                                        <span>Enter the OTP you received at</span>
                                        <span className="font-bold">+91 ******876</span>
                                    </div>

                                    <div id="otp" className="flex flex-row justify-center text-center px-2 mt-5">
                                        <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="first" maxLength="1" onChange={handleChaneOtpInput} />
                                        <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="second" maxLength="1" onChange={handleChaneOtpInput} />
                                        <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="third" maxLength="1" onChange={handleChaneOtpInput} />
                                        <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fourth" maxLength="1" onChange={handleChaneOtpInput} />
                                        <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fifth" maxLength="1" onChange={handleChaneOtpInput} />
                                        <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="sixth" maxLength="1" onChange={handleChaneOtpInput} />
                                    </div>

                                    <div className="flex justify-center text-center mt-5">
                                        <a className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer"><span className="font-bold">Resend OTP</span><i className='bx bx-caret-right ml-1'></i></a>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${!show ? "hidden" : 'flex flex-row'}`}>
                <input type="text" placeholder={"Enter your OTP"}
                    onChange={(e) => { setotp(e.target.value) }}></input>
                <button onClick={ValidateOtp}>Verify</button>
            </div>
        </div>
    );
}

export default Login;