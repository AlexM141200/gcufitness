import React, { useState } from "react";
import axios from "axios";
import { Nanum_Brush_Script } from "@next/font/google";
import Modal from "react-modal";
import { doc, getDoc, setDoc, collection, getDocs, addDoc, docs } from "firebase/firestore";
import { auth, firestore } from "../pages/firebase";
import { useAuthState } from "react-firebase-hooks/auth";


const NUTRITIONIX_APP_ID = "8d0ff95b";
const NUTRITIONIX_APP_KEY = "df26571e03064f5e3a49b78a9b746c68";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0, 0.4)",
    zIndex: 9999,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const App = ({ meal, date }) => {
  const [user, loading, error] = useAuthState(auth);
  const [results, setResults] = useState(null);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setResults(null);
    queryAPI();
  };

  const queryAPI = () => {
    const url = `https://api.nutritionix.com/v1_1/search/${query}?results=0%3A20&fields=item_name%2Cbrand_name%2Cupc%2Cnf_servings_per_container%2Cnf_serving_size_qty%2Cnf_serving_size_unit%2Cmetric_qty%2Cnf_calories%2Cnf_protein%2Cnf_total_fat%2Cnf_total_carbohydrate&appId=${NUTRITIONIX_APP_ID}&appKey=${NUTRITIONIX_APP_KEY}`;

    axios
      .get(url)
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const openModal = (item) => {
    setModalData(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const addFood = async () => {

    const originalDate = date;
    const dateObj = new Date(originalDate);
    const formattedDate = dateObj.toLocaleDateString("en-GB").replace(/\//g, "-").toString();

    const userRef = doc(firestore, "users", user.uid);
    //Food Diary
    const docRef = doc(userRef, "foodDiary", formattedDate)
    const diaryRef = collection(userRef, "foodDiary", formattedDate, meal);

    const dummyData = { exists: "true" };
    const foodData = {
      name: modalData.fields.item_name,
      brand: modalData.fields.brand_name,
      calories: modalData.fields.nf_calories,
      protein: modalData.fields.nf_protein,
      fat: modalData.fields.nf_total_fat,
      carbohydrates: modalData.fields.nf_total_carbohydrate,
    };

    await setDoc(docRef, dummyData);
    await addDoc(diaryRef, foodData);

    setModalData(null);
    closeModal();
  };



  return (
    <div>
      <h1>Add {meal} food for {date} </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Search for food:
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <button type="submit">Get nutrition information</button>
      </form>
      {results && results.hits && (
        <div>
          <h3>Results:</h3>
          {results.hits.map((item) => (
            <div
              className="item"
              style={{
                border: "2px solid black",
                margin: "1rem",
                padding: "1rem",
              }}
            >
              <div key={item.fields.item_name}>
                <h4>{item.fields.item_name}</h4>
                <p>Brand: {item.fields.brand_name}</p>
                <p>Item Barcode: {item.fields.upc}</p>
                <p>
                  Servings Per Container:{" "}
                  {item.fields.nf_servings_per_container}
                </p>
                <p> Serving Size Qty: {item.fields.nf_serving_size_qty}</p>
                <p>Serving Size Unit: {item.fields.nf_serving_size_unit}</p>
                <p>Metric Qty: {item.fields.metric_qty}</p>
                <p>Calories: {item.fields.nf_calories}</p>
                <p>Protein: {item.fields.nf_protein}g</p>
                <p>Total Fat: {item.fields.nf_total_fat}g</p>
                <p>Total Carbohydrates: {item.fields.nf_total_carbohydrate}g</p>
                <button onClick={() => openModal(item)}>Add to Diary</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Food Modal"
        portalClassName="modal-portal"
      >
        <h2 id="modal-title" style={{ color: "black" }}>
          {modalData ? modalData.fields.item_name : null}
        </h2>
        <p id="modal-brand" style={{ color: "black" }}>
          Brand: {modalData ? modalData.fields.brand_name : null}
        </p>
        <p id="modal-calories" style={{ color: "black" }}>
          Calories: {modalData ? modalData.fields.nf_calories : null}
        </p>
        <p id="modal-protein" style={{ color: "black" }}>
          Protein: {modalData ? modalData.fields.nf_protein : null}g
        </p>
        <p id="modal-fat" style={{ color: "black" }}>
          Total Fat: {modalData ? modalData.fields.nf_total_fat : null}g
        </p>
        <p id="modal-carbohydrates" style={{ color: "black" }}>
          Total Carbohydrates:{" "}
          {modalData ? modalData.fields.nf_total_carbohydrate : null}g
        </p>
        <div className="diary-btn-columns">
          <button onClick={closeModal}>Close</button>
          <button onClick={addFood}> Add to Diary</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
