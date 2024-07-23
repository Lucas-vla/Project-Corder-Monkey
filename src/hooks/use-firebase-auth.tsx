import { auth, db } from "@/config/firebase-config";
import { UserDocument, UserInterface } from "@/types/user";
import { unsubscribe } from "diagnostics_channel";
import { User, onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

// Voir avec Alex pour réexplication...

export default function useFirebaseAuth () {
    const [authUser, setAuthUser] = useState<UserInterface | null>(null)
    const [authUserIsLoading, setAuthUserIsLoading] = useState<boolean>(true)

    // reload authUserData function
    const reloadAuthUserData = () => {
        if (auth.currentUser) {
            auth.currentUser.reload().then(() => {
                authStateChanged(auth.currentUser)
            })
        }
    }

    const formatAuthUser = (user: UserInterface) => ({ // ici on formatte les données
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        emailVerified: user.emailVerified,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
    });

    const getUserDocument = async (user: UserInterface) => {
        if (auth.currentUser) {
            const documentRef = doc(db, "users", auth.currentUser.uid)
            const compactUser = user;

            onSnapshot(documentRef, async (doc) => {
                if (doc.exists()) {
                    compactUser.userDocument = doc.data() as UserDocument
                }
                setAuthUser((prevAuthUser) => (
                    {
                        ...prevAuthUser,
                        ...compactUser,
                    }
                ))
                setAuthUserIsLoading(false);
            })
        }
        //...
    }

    const authStateChanged = async (authState: UserInterface | User | null) => {
        if(!authState) {
            setAuthUser(null);
            setAuthUserIsLoading(false)
            return;
        }
        setAuthUserIsLoading(true)
        const formattedUser = formatAuthUser(authState);
        await getUserDocument(formattedUser)

    }

    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, authStateChanged);
          return () => unSubscribed();
    },[])

    return {
        authUser,
        authUserIsLoading,
        reloadAuthUserData
    }
}