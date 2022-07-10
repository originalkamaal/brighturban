//user related operations routes

const Users = require('../../models/Users');
const { ApolloError } = require('apollo-server-errors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// TYPE ---> User
// firstname: String,
// lastname: String,
// username: String,
// email: String,
// mobile: Int,
// password: String,
// usertype: Int,

module.exports = {
    Mutation: {
        //Mutation for user creation
        async registerUser(_, { userDetails: { firstname, lastname, email, mobile, password, usertype, confirm_password, terms } }) {
            //checking if user already exists
            console.log(firstname, lastname, email, mobile, password, usertype);
            const oldUser = await Users.findOne({ $or: [{ email }, { mobile }] });
            var errorMsg = '';
            if (oldUser) {
                //Throwing error if that user exists

                throw new ApolloError('User already exist')
            } else {

                //Password encryption using bcrypt
                const salt = await bcrypt.genSalt(10);
                var password = await bcrypt.hash(password, salt);

                //Creating User Model for new User
                const newUser = new Users({
                    firstname: firstname.trim(),
                    lastname: lastname.trim(),
                    mobile: mobile,
                    email: email.toLowerCase(),
                    password: password,
                    usertype: usertype

                });

                //Generating JWT Token

                const token = jwt.sign(
                    { user_id: newUser._id, email: newUser.email },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "2h"
                    }
                );

                newUser.token = token;
                const res = await newUser.save();

                return {
                    id: res.id,
                    ...res._doc
                };



            }
        },
        async loginUser(_, { credentials: { user, password } }) {
            //checking if user is trying to login in using email or phone if not email then parseto int considering phone

            const validateEmail = (email) => {
                return String(email)
                    .toLowerCase()
                    .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    );
            };

            //checking if user exists with given loginby type e.g "mobile","email".
            var userToLogin = null;

            if (validateEmail(user)) {
                userToLogin = await Users.findOne({ email: user });
            } else {
                userToLogin = await Users.findOne({ mobile: parseInt(user) });
            }

            if (userToLogin == null) {
                throw new ApolloError("User doesn't exists");
            }

            //Chekcing if given password is same as encrypted password of user

            var ogPass = await bcrypt.compare(password, userToLogin.password)
            if (userToLogin && ogPass) {
                //Creating new token for user

                const { firstname, lastname, email, mobile, usertype, emailverified, mobileverified } = userToLogin;




                const token = jwt.sign(
                    {
                        firstname,
                        lastname,
                        email,
                        mobile,
                        usertype,
                        emailverified,
                        mobileverified,
                        user_id: userToLogin._id,
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "2h"
                    }
                );
                //Attaching new token with userModel..
                userToLogin.token = token;

                //updating user token in db
                userToLogin.save();
                return {
                    id: userToLogin.id,
                    ...userToLogin._doc
                }

            } else {

                //incorrect password
                throw new ApolloError('Incorrect Password', 'INCORRECT_PASSOWRD');
            }



        }
    },
    Query: {

        async user(_, { id }) {
            return Users.findById(id);
        }
    }
}