import { auth } from "./app";
import Router from "next/router";
const {
    getAuth,
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendEmailVerification,
} = auth;

export const _auth = getAuth();

interface SignInProps {
    email: string,
    password: string
}

export const handleAuthChange = (actions: any) => {
    onAuthStateChanged(_auth, (user) => {
        if (!user) {
            Router.push('/')
            actions("SET_USER", user);
            actions("SET_LOADING", false);
        } else {
            Router.push('/dashboard/profile');
            actions("SET_USER", user);
            actions("SET_LOADING", false);
        }
    });
};

export const handleSignIn = async ({ email, password }: SignInProps) => {
    try {
        await signInWithEmailAndPassword(_auth, email, password);
    } catch (error: any) {
        switch (error.code) {
            case "auth/user-not-found":
                window.alert(`That email has not been registered.`);
                break;
            case "auth/wrong-password":
                window.alert(`Incorrect password for this email.`);
                break;
            default:
                window.alert(error.code);
                break;
        }

    }
};

export const handleCreateUser = async ({ email, password }: SignInProps) => {
    try {
        let user = await createUserWithEmailAndPassword(_auth, email, password);
        if (user) {
            await sendEmailVerification(user.user);
        }
    } catch (error: any) {
        window.alert(error.code);
    }
};

export const handleSignOut = () => {
    signOut(_auth).then(() => Router.push('/'));
};