import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDWLL7gw7EM71EidhifpLPLK9Qfaypzdp4",
	authDomain: "netflix-clone-713f2.firebaseapp.com",
	projectId: "netflix-clone-713f2",
	storageBucket: "netflix-clone-713f2.appspot.com",
	messagingSenderId: "785725774104",
	appId: "1:785725774104:web:65a20022730766eed5e66d",
	measurementId: "G-LC4Z5JCQ40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

/** getAuth() ****

Returns the Auth instance associated with the provided FirebaseApp. If no instance exists, initializes an Auth instance with platform-specific default dependencies.
*/
