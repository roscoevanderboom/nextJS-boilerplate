import firebase from "firebase/auth";

interface Profile {
    uid: string,
    image: string,
    displayName: string,
}

export interface AppState {
    user: firebase.User | null,
    loading: boolean,
    profile: Profile
}