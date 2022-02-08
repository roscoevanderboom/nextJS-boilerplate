import { auth } from "./firebase.api";
// import { createUserProfile } from "./userProfiles";
// import toastMessages from "../constants/toastMessages";
// import { REDUCERS_TYPES } from "../reducers/app-reducer";

const {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} = auth;

export const _auth = getAuth();

export const handleAuthChange = (actions) => {
  onAuthStateChanged(_auth, (user) => {
    console.log(user);
  });
};

// export const handleSignIn = async ({ email, password }) => {
//   try {
//     await signInWithEmailAndPassword(_auth, email, password);
//   } catch (error) {
//     toast.show(error.message, { type: "danger", duration: 5000 });
//   }
// };

// export const handleCreateUser = async ({ email, password, username }) => {
//   try {
//     let user = await createUserWithEmailAndPassword(_auth, email, password);
//     if (user) {
//       await createUserProfile(user.user, username);
//       await sendEmailVerification(user.user);
//       toast.show(toastMessages.AUTH_EMAIL_SENT, {
//         type: "success",
//         duration: 3000,
//       });
//     }
//   } catch (error) {
//     toast.show(error.message, { type: "danger" });
//   }
// };

// export const handleSignOut = () => {
//   signOut(_auth);
// };
