// src/lib/server/appwrite.js
"use server";
import { Client, Account, Databases, Users } from "node-appwrite";
import { cookies } from "next/headers";

//return a new instance of Appwrite Client
export async function createSessionClient() {
    //create a client and set endpoint and projectId to tell to appwrite which project it should modify
    const client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

    //create a session when user log in successfully
    const session = cookies().get("appwrite-session");
    if (!session || !session.value) {
        throw new Error("No session");
    }

    //set the current user's session
    client.setSession(session.value);

    return {
        get account() {
        return new Account(client);
        },
    };
}

//contain several functionalities for user to perform actions via API(return a new instance of Appwrite Client)
export async function createAdminClient() {
    const client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
        .setKey(process.env.NEXT_APPWRITE_KEY!);

    return {
        get account() {
            return new Account(client);
        },
        get database() {
            return new Databases(client);
        },
        get user() {
            return new Users(client);
        }
    };
}
