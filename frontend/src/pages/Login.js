import React, { Component } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io'
import { auth } from '../configs/firebase';
import { Link } from 'react-router-dom';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            confirmOtp: false,
            phoneNumber: null,
            firebaseError: null,
            showLoading: false,
            otp: {
                1: "",
                2: "",
                3: "",
                4: "",
                5: "",
                6: ""
            },
            recaptchaState: null

        }
    }


    componentDidMount() {
        console.log("test")
        const recaptchaState = new RecaptchaVerifier('recaptcha-verifier', {
            'size': 'invisible',
        }, auth);

        this.setState({ recaptchaState })
    }

    handleoptInput = (e) => {
        const { otp } = this.state;
        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split("-");
        if (value.length >= maxLength) {

            const index = parseInt(fieldIndex, 10);
            if (index <= 6) {

                otp[index] = value;
                console.log(JSON.stringify(otp))

                // Get the next input field
                const nextSibling = document.querySelector(
                    `input[name=otp-${parseInt(fieldIndex, 10) + 1}]`
                );

                // If found, focus the next field
                if (nextSibling !== null) {
                    nextSibling.focus();
                }
            }

            if (!otp[1] === "" && !otp[2] === "" && !otp[3] === "" && !otp[4] === "" && !otp[5] === "" && !otp[6] === "") {
                //combine OTP Digits

                const finalOTP = otp[1] + otp[2] + otp[3] + otp[4] + otp[5] + otp[6];
                this.setState({ showLoading: true });
                this.verifyOTP(finalOTP);

                //verify otp
            }
        }
    }


    requestOTP = (e) => {
        e.preventDefault();

        const {recaptchaState} = this.state;

        const { phoneNumber } = this.state;

        this.setState({ showLoading: true });
        e.preventDefault();
        if (phoneNumber.length === 10) {
            const phoneDigits = "+91" + phoneNumber;
            signInWithPhoneNumber(auth, phoneDigits, recaptchaState).then(confirmation => {
                this.setState({ showLoading: false });
                window.confirmationResult = confirmation;
                this.setState({ confirmOTP: true });
            }).catch(err => {

                console.log(err);
                this.setState({ firebaseError: "Something went wrong! please try after sometime." + err });
            });

        }
    }


    captchaCallBack(response) {
        console.log(response);
    }

    expiredCaptchaCallBack(respnse) {
        console.log(respnse)
    }


    verifyOTP(finalOTP) {


        if (finalOTP.length === 6) {
            let confirmation = window.confirmationResult;
            confirmation.confirm(finalOTP).then(res => {
                const user = res.user;
                if (user) {

                }
            }).catch(err => {

                console.log(err);
            })
        }
    }

    render() {
        const IndianFlag = () => { return <img src='/icons/india.png' alt='Logo' width={20} height={20} className="h-10 w-12 p-2" /> }
        const { phoneNumber, firebaseError, confirmOtp } = this.state;
        return (
            <div className='flex flex-row w-full h-screen justify-center items-center' >

                <div className={`${confirmOtp ? "hidden" : 'flex flex-row'} w-screen h-screen flex justify-center items-center bg-red-600`}>
                    <form className="p-10 border shadow-md rounded-md w-1/3 bg-white drop-shadow-lg space-y-5" onSubmit={this.requestOTP}>

                        <Link to="/" className="w-full relative -left-1 -top-1 text-2xl"><span className=' cursor-pointer'><IoMdArrowRoundBack /></span></Link>
                        <div className='w-full items-center flex flex-col justify-center'>
                            <img src="/images/otp.png" alt='OTP Logo' width={100} height={50} className="pb-6" />
                            <h1 className="text-center text-2xl font-bold">Enter Mobile Number</h1>
                            <p className='text-xs px-5 text-center'>Enter your 10-digit mobile number to receive the verification code.</p>
                        </div>


                        <div className="mb-1 block">
                            <label
                                htmlFor="small" className='flex justify-start w-full items-start font-medium text-sm'
                            >Mobile Number : </label>
                        </div>

                        <div className="flex flex-col space-y-2 w-full">

                            <div className='flex flex-row w-full border h-10 text-center form-control rounded'>
                                <IndianFlag />
                                <input
                                    id="small"
                                    type="number"
                                    name="phoneNumber"
                                    maxLength={10}
                                    onChange={(e) => this.setState({ phoneNumber: e.target.value })}
                                    sizing="md"
                                    className="focus:outline-none h-10"
                                />

                            </div>

                        </div>

                        <div className='flex flex-row w-full space-x-4'>
                            <button className="w-full px-10 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in" type='submit'>
                                Send OTP
                            </button>
                        </div>

                        {firebaseError && <div className='text-xs text-red-500 flex w-full justify-center'>{firebaseError}</div>}
                    </form>
                </div>


                <div className={`${!confirmOtp ? "hidden" : 'flex flex-row'} w-full h-screen bg-red-600 py-20 px-3`}>
                    <div className="container mx-auto">
                        <div className="max-w-sm mx-auto md:max-w-lg">
                            <div className="w-full">
                                <div className="bg-white h-64 py-3 rounded text-center">
                                    <h1 className="text-2xl font-bold">OTP Verification</h1>
                                    <form name='verifyOtp'>

                                        <div className="flex flex-col mt-4">
                                            <span>Enter the OTP you received at</span>
                                            {phoneNumber && <span className="font-bold">+91 ******{phoneNumber[7]}{phoneNumber[8]}{phoneNumber[9]}</span>}

                                        </div>

                                        <div id="otp" className="flex flex-row justify-center text-center px-2 mt-5">
                                            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="first" maxLength="1" name='otp-1' onChange={this.handleoptInput} />
                                            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="second" maxLength="1" name='otp-2' onChange={this.handleoptInput} />
                                            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="third" maxLength="1" name='otp-3' onChange={this.handleoptInput} />
                                            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fourth" maxLength="1" name='otp-4' onChange={this.handleoptInput} />
                                            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fifth" maxLength="1" name='otp-5' onChange={this.handleoptInput} />
                                            <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="sixth" maxLength="1" name='otp-6' onChange={this.handleoptInput} />
                                        </div>

                                        <div className="flex flex-row items-center justify-around text-center mt-5">
                                            <div onClick={this.requestOTP} className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer"><span className="font-bold">Resend OTP</span><i className='bx bx-caret-right ml-1'></i></div>
                                            <div onClick={() => this.setState({ confirmOtp: false })} className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer"><span className="font-bold">Change Number</span><i className='bx bx-caret-right ml-1'></i></div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='recaptcha-verifier'></div>
            </div>
        );
    }
}

export default Login;