import { loginProp, registerProp } from "@/types/types";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;


export async function RegisterAuth(userRegister: registerProp) {
    try {
        const res = await fetch(`${apiUrl}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userRegister),

        });
        if (res.ok) {
            return res.json();
        } else {
            alert('User already exists');
            throw new Error('Failed to register');

        }
    } catch (error: any) {
        throw new Error(error);
    }
};


export async function LoginAuth(userLogin: loginProp) {
    try {
        const res = await fetch(`${apiUrl}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userLogin),
        });
        if (res.ok) {
            return res.json();
        } else {
            throw new Error('Failed to login');
        }
    } catch (error: any) {
        throw new Error(error);
    }
};


