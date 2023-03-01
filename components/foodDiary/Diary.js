import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setDefaultLocale, registerLocale } from "react-datepicker";
import { doc, getDoc, setDoc, collection } from "firebase/firestore";
import { enGB } from "date-fns/locale/en-GB";
import React, { useState, useEffect } from "react";
import AddBreakfast from "./AddBreakfast";
import { auth, firestore } from "../../pages/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import GetDiaryEntries from "../GetDiaryEntries";

registerLocale("enGB", enGB);

const Diary = () => {
  const [user, loading, error] = useAuthState(auth);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [foodData, setFoodData] = useState(null);

  useEffect(() => {
    if (user) {
      fetchFoodData(selectedDate);
    }
  }, [selectedDate, user]);

  const fetchFoodData = async (date) => {
    const userRef = doc(firestore, "users", user.uid);
    const diaryDate = date.toLocaleDateString("en-GB").replace(/\//g, "-");
    const diaryRef = doc(userRef, "foodDiary", diaryDate);
    const diaryDoc = await getDoc(diaryRef);
    if (diaryDoc.exists()) {
      setFoodData(diaryDoc.data());
      console.log(foodData);
    } else {
      console.log("no entries");
    }
  };

  return (
    <>
      {user ? (
        <div>
          <h1>Food Diary For Today</h1>
          <div className="date-picker-container">
            <button
              onClick={() =>
                setSelectedDate(new Date(selectedDate.getTime() - 86400000))
              }
            >
              <i>Previous</i>
            </button>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="yyyy/dd/MM"
            />
            <button
              onClick={() =>
                setSelectedDate(new Date(selectedDate.getTime() + 86400000))
              }
            >
              <i>Next</i>
            </button>
          </div>

          <div className="container">
            <div className="breakfast">
              <div className="foodItem">
                <h1>Breakfast</h1>
                <div className="foodData" style={{ borderRadius: "10px" }}>
                  {foodData?.breakfast}
                  <AddBreakfast />
                </div>
              </div>
            </div>
            <div className="lunch">
              <div className="foodItem">
                <h1>Lunch</h1>
                <div className="foodData" style={{ borderRadius: "10px" }}>
                  {foodData?.lunch}
                  <button>Add Entry</button>
                </div>
              </div>
            </div>
            <div className="dinner">
              <div className="foodItem">
                <h1>Dinner</h1>
                <div className="foodData" style={{ borderRadius: "10px" }}>
                  {foodData?.dinner}
                  <button>Add Entry</button>
                </div>
              </div>
            </div>
            <div className="snacks">
              <div className="foodItem">
                <h1>Snacks</h1>
                <div
                  className="foodData"
                  style={{ borderRadius: "10px", borderWidth: "2px" }}
                >
                  {foodData?.snacks}
                  <button>Add Entry</button>
                </div>
              </div>
            </div>
            <div className="totalCalories">{foodData?.totalCalories}</div>
            <div className="totalProtein">{foodData?.totalProtein}</div>
            <div className="totalFat">{foodData?.totalFat}</div>
            <div className="totalCarbs">{foodData?.totalCarbs}</div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>

  );
};

export default Diary;
