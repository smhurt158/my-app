import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setEndpoint('http://localhost/v1') // Your API Endpoint
    .setProject('63706a135c09394516e5');               // Your project ID

const account = new Account(client);
const promise = account.create('[USER_ID]', 'email@example.com', 'password');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});