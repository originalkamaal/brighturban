const { gql } = require('apollo-server');

module.exports = gql`

type User {
    id:String,
    firstname: String!,
    lastname: String!,
    email: String!,
    mobile: String!,
    password: String!,
    token: String!,
    usertype:String!,
    mobileverified:Boolean!,
    emailverified:Boolean!
}

input RegisterInput {
    firstname: String!,
    lastname: String!,
    email: String!,
    mobile: String!,
    password: String!,
    usertype: String!,
    confirm_password:String!,
    terms: String!
    
}

input LoginInput {
    user:String!,
    password:String!
}

type Query {
    user(id: ID) : User
}

type Mutation {
    registerUser(userDetails: RegisterInput) : User!
    loginUser(credentials: LoginInput) : User
}
`