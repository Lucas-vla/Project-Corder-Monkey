import { doc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";

export const firestoreCreateDocument = async (
    collectionName: string,
    documentId: string,
    data: object,
  ) => {
    try {
      const documentRef = doc(db, collectionName, documentId);
  
      await setDoc(documentRef, data);
      return { data: true };
    } catch (error) {
      const firebaseError = error as FirebaseError;
      
      return {
        error: {
          code: firebaseError.code,
          message: firebaseError.message,
        },
      };
    }
  };

// voir firebase doc (ajouter des données, mettre à jour document si incompréhension)
export const firestoreUpdateDocument = async (
  collectionName: string,
  documentId: string,
  data: object,
) => {
  // collectionName sera utilisé si elle existe déjà sinon elle sera crée, documentID represente le document sur lequel on va travailler, data seront les donnée que l'on va mettre a jour dans la BD (on le met "any" car on ne sait pas ce que les données transmise seront)
  try {
    const documentRef = doc(db, collectionName, documentId);

    await updateDoc(documentRef, data);
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
