import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAsoIOxWb1AhYOQM3QEXPdZNpbLrUIDaSA",
  authDomain: "proyectoreact-49915.firebaseapp.com",
  projectId: "proyectoreact-49915",
  storageBucket: "proyectoreact-49915.appspot.com",
  messagingSenderId: "510941337865",
  appId: "1:510941337865:web:b78adc58ad847c5a14dbd8"
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

export default async function getItems() {
    
  const colectionProductsRef = collection(DB, "productos");

  const documentSnapshot = await getDocs(colectionProductsRef)

  const documentData = documentSnapshot.docs.map( (doc) => {
    let docDataWithId = doc.data()
    docDataWithId.id = doc.id
    return docDataWithId
  })

  return documentData
}