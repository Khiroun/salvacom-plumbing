import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import app from "./firebase";

export const db = getFirestore(app);

export const getAll = async (collectionName: string) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const res = [];
  querySnapshot.forEach((doc) => {
    res.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return res;
};
export const getDocument = async (collectionName: string, id: string) => {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...docSnap.data(),
    };
  }
  return null;
};
export const addDocument = (collectionName: string, data: any) => {
  return addDoc(collection(db, collectionName), data);
};

export const deleteDocument = (collectionName: string, id: string) => {
  return deleteDoc(doc(db, collectionName, id));
};
