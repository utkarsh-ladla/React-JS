import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client;
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectId);                 // Your project ID
    this.account = new Account(this.client);
    }

// sign up
    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount) {
                // call another methods 
                // return userAccount
                return this.login({email, password});
            } else{
                return userAccount;
            }
        
        } catch (error) {
            throw error;
        }
    }
// Login 
    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(eamil, password);
        } catch (error){
            throw error;
        }
    }
//signout
    async getCurrentUser({}) {
        try {
            return await this.account.get();
        } catch(error) {
            throw error;
        }

        return null;
    }

// Logout
    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serives :: logout :: error", error);
        }
    }
}
const authService = new AuthService
export default authService;



