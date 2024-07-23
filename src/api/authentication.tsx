import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";

// On isole ici la logique avec cette fonction ici plutot que de l'inserrer directement dans le Register.container pour que ce soit plus propre
// mais aussi dans le cadre d'un changement de firebase vers une autre API cela soit plus simple en cas de transition.
export const firebaseCreateUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { data: userCredential.user };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    //... @todo format error
    return {
      error: {
        code: firebaseError.code,
        message: firebaseError.message,
      },
    };
  }
};

export const firebaseSignInUser = async (email: string, password: string) => {
  // construction de ce bloc de code via la doc de firebase "authentification par mot de passe"
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { data: userCredential.user };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    //... @todo format error
    return {
      error: {
        code: firebaseError.code,
        message: firebaseError.message,
      },
    };
  }
};

export const firebaseLogoutUser = async () => {
  // construction de ce bloc de code via la doc de firebase "authentification par mot de passe"
  try {
    await signOut(auth);
    return { data: true };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    //... @todo format error
    return {
      error: {
        code: firebaseError.code,
        message: firebaseError.message,
      },
    };
  }
};

export const sendEmailToResetPassword = async (email: string) => {
  // voir doc de firebase, tous ces blocs sont dans la doc rien est inventé ici
  try {
    await sendPasswordResetEmail(auth, email);
    return { data: true };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    //... @todo format error
    return {
      error: {
        code: firebaseError.code,
        message: firebaseError.message,
      },
    };
  }
};

export const sendEmailVerificationProcedure = async () => {
  // voir doc de firebase, tous ces blocs sont dans la doc rien est inventé ici
  if (auth.currentUser) {
    try {
      await sendEmailVerification(auth.currentUser);
      return { data: true };
    } catch (error) {
      const firebaseError = error as FirebaseError;
      //... @todo format error
      return {
        error: {
          code: firebaseError.code,
          message: firebaseError.message,
        },
      };
    }
  } else {
    return {
      error: {
        code: "unknown",
        message: "Une erreur est survenue",
      },
    };
  }
};

export const updateUserIdentificationData = async (uid: string, data: any) => {
  const result = await fetch(
    "https://us-central1-coders-monkeys-df649.cloudfunctions.net/updateUser",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: uid,
        data: data,
      }),
    }
  );

  if (!result.ok) {
    const errorResponse = await result.json();
    const firebaseError = errorResponse as FirebaseError;

    return {
      error: {
        code: firebaseError.code,
        message: firebaseError.message,
      },
    };
  }
  return { data: true };
};
