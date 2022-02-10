import { auth } from "./app";

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

export const handleAuthChange = () => {
    onAuthStateChanged(_auth, (user) => {
        console.log(user);
    });
};

export const handleSignIn = async ({ email, password }: SignInProps) => {
    try {
        await signInWithEmailAndPassword(_auth, email, password);
    } catch (error) {
        console.log(error)
    }
};

export const handleCreateUser = async ({ email, password }: SignInProps) => {
    try {
        let user = await createUserWithEmailAndPassword(_auth, email, password);
        if (user) {
            await sendEmailVerification(user.user);
            console.log("Sucess")
        }
    } catch (error) {
        console.log(error)
    }
};

export const handleSignOut = () => {
    signOut(_auth);
};