import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc} from "firebase/firestore"

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

export async function getSingleItem(idParams){
  const docRef = doc(DB, "productos", idParams)

  const docSnapshot = await getDoc(docRef)

  return {
    ...docSnapshot.data(),
    id: docSnapshot.id
  }
}

export async function getItemsByCategory(categoryParams){
  const collectionRef = collection(DB, "productos")

  const queryCat = query(collectionRef, where("categoria", "==", categoryParams))

  const documentSnapshot = await getDocs(queryCat)

  const documentData = documentSnapshot.docs.map((doc) =>{
    return {
      ...doc.data(),
      id: doc.id
    }
  })

  return documentData
}

export async function crearOrden(ordenDeCompra){
  const collectionRef = collection(DB, "orders")
  const docOrder = await addDoc(collectionRef, ordenDeCompra)
  return(docOrder.id)
}

/* export async function exportArrayToFirestore(){
  const collectionRef = collection(DB, "productos")

  for(let item of productos){
    let docOrder = await addDoc(collectionRef, item)
  }
  
  function cargarFirestore(){
    exportArrayToFirestore()
  } 
  Funcion para cargar automaticamente a la base del Firestore
} */