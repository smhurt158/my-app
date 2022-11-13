import { Account, Client } from 'appwrite';

export const api = new Client();
api.setEndpoint('http://localhost/v1')
api.setProject('63706a135c09394516e5');

export const account = new Account(api)
