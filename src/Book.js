// src/Book.js
import { db } from './firebase'; // Your configured Firestore instance
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';

const bookCollection = collection(db, 'books');

// ✅ Add book
export const added = async (book) => {
  await addDoc(bookCollection, book);
};

// ✅ View all books
export const view = async () => {
  const snapshot = await getDocs(bookCollection);
  return snapshot.docs.map((doc) => ({
    id: doc.id, // Firestore document ID
    ...doc.data()
  }));
};

// ✅ Update book
export const update = async (book, id) => {
  const bookRef = doc(db, 'books', id);
  await updateDoc(bookRef, book);
};

// ✅ Delete book
export const deleteing = async (id) => {
  const bookRef = doc(db, 'books', id);
  await deleteDoc(bookRef);
};
