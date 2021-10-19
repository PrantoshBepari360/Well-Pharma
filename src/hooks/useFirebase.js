import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});

    const auth = getAuth();

    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider).then((result) => {
            setUser(result.user);
        })
        .finally( () => setIsLoading(false));
    };

    //observe user state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth]);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then((result) => {})
        .finally( () => setIsLoading(false));
    };

    return {
        user,
        isLoading,
        signInWithGoogle,
        logOut,
    };
};

export default useFirebase;