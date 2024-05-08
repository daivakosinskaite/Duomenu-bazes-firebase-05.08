// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  onValue,
  //child,
  //get,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRNi4rPiNHV2Ny1kwNgd-d5s67xKq8ln8",
  authDomain: "testas-a3a99.firebaseapp.com",
  databaseURL:
    "https://testas-a3a99-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "testas-a3a99",
  storageBucket: "testas-a3a99.appspot.com",
  messagingSenderId: "480093560567",
  appId: "1:480093560567:web:5e2bd5aa7b6ccdb79e7df2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

let productCode = document.getElementById("productCodeInput");
let productName = document.getElementById("productNameInput");
let productQuantity = document.getElementById("productQuantityInput");
let productCode2 = document.getElementById("productCodeInput2");

let btnInsert = document.getElementById("btnInsert");
let btnUpdate = document.getElementById("btnUpdate");
let btnDelete = document.getElementById("btnDelete");
let btnSelect = document.getElementById("btnSelect");

function insertData(evt) {
  evt.preventDefault();
  console.log(productCode.value, productName.value, productQuantity.value);
  set(ref(db, "products/" + productCode.value), {
    ID: productCode.value,
    Name: productName.value,
    Quantity: productQuantity.value,
  });
}
btnInsert.addEventListener("click", insertData);

const starCountRef = ref(db, "products/" + productCode.value); //referensas i produkto varda ir koda.
onValue(starCountRef, (snapshot) => {
  //
  const data = snapshot.val(); //kintamasis bazei
  let place = document.getElementById("selectView");
  console.log(place);
  console.log(data);

  for (let product in data) {
    console.log(data[product].Name);
    // 1.sukurti li
    const tempVar = document.createElement("li");
    // 2.ideti i ji info Name is DB
    tempVar = innerText = inputValue.value;
    // 3. i place ul appendinti li
    place.appendChild(tempVar);
  }
});

// function addValue(){
//   console.log("Labas");
//
//
//   console.log(inputValue.value);
//
// }
