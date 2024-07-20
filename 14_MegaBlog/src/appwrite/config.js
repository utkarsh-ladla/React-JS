import conf from "../conf/conf";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class serive{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectId);                 // Your project ID
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
    }

    async cretePost({title,slug, content, featuredImage,status, userId}){

    }

}

const service = new Services()
export default serive;

