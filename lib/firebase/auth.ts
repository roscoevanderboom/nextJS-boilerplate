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

export const handleAuthChange = (router: any, actions: any) => {
    onAuthStateChanged(_auth, (user) => {
        actions("SET_USER", user)
        // console.log(user);
        // if (user) {
        //     router.push('/dashboard')
        // } else {
        //     router.push('/')
        // }
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
            console.log("Sucess")
        }
    } catch (error: any) {
        window.alert(error.message);
    }
};

export const handleSignOut = () => {
    signOut(_auth);
};