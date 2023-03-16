import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setDefaultLocale, registerLocale } from "react-datepicker";
import { doc, getDoc, setDoc, collection, getDocs, docs } from "firebase/firestore";
import { enGB } from "date-fns/locale/en-GB";
import React, { useState, useEffect } from "react";
import AddBreakfast from "./AddBreakfast";
import { auth, firestore } from "../../pages/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
import 'chart.js/auto';


registerLocale("enGB", enGB);

const Diary = () => {
  const [user, loading, error] = useAuthState(auth);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [foodData, setFoodData] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
  });

  const macroData = {
    labels: ['Fats', 'Carbohydrates', 'Protein'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const calorieData = {
    labels: ['Daily Calories', 'Remaining Calories'],
    datasets: [
      {
        label: 'Total Calories',
        data: [1500, 2600],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgb(102,153,204)'
        ],
        borderColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgb(102,153,204, 0.2)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'top',
      },
    },
    elements: {
      arc: {
        borderWidth: 0
      }
    }
  };


  useEffect(() => {
    if (user) {
      fetchFoodData(selectedDate);
    }
  }, [selectedDate, user]);

  const fetchFoodData = async (date) => {
    const userRef = doc(firestore, "users", user.uid);
    const diaryDate = date.toLocaleDateString("en-GB").replace(/\//g, "-");
    const diaryRef = doc(userRef, "foodDiary", diaryDate);
    const diaryDocSnap = await getDoc(diaryRef);

    if (diaryDocSnap.exists()) {
      const diaryData = diaryDocSnap.data();

      // Fetch breakfast, lunch and dinner subcollections
      const breakfastRef = collection(diaryRef, "breakfast");
      const lunchRef = collection(diaryRef, "lunch");
      const dinnerRef = collection(diaryRef, "dinner");

      // Retrieve all documents in the breakfast subcollection
      const breakfastQuerySnap = await getDocs(breakfastRef);
      const breakfastData = breakfastQuerySnap.docs.map((doc) => doc.data());

      // Retrieve all documents in the lunch subcollection
      const lunchQuerySnap = await getDocs(lunchRef);
      const lunchData = lunchQuerySnap.docs.map((doc) => doc.data());

      // Retrieve all documents in the dinner subcollection
      const dinnerQuerySnap = await getDocs(dinnerRef);
      const dinnerData = dinnerQuerySnap.docs.map((doc) => doc.data());

      // Calculate total macronutrient values for breakfast
      const totalBreakfastCalories = breakfastData.reduce((total, item) => {
        return total + item.calories_unit * item.units;
      }, 0);
      const totalBreakfastProtein = breakfastData.reduce((total, item) => {
        return total + item.protein_unit * item.units;
      }, 0);
      const totalBreakfastFat = breakfastData.reduce((total, item) => {
        return total + item.fat_unit * item.units;
      }, 0);
      const totalBreakfastCarbs = breakfastData.reduce((total, item) => {
        return total + item.carbs_unit * item.units;
      }, 0);

      // Calculate total macronutrient values for breakfast
      const totalLunchCalories = lunchData.reduce((total, item) => {
        return total + item.calories_unit * item.units;
      }, 0);
      const totalLunchProtein = lunchData.reduce((total, item) => {
        return total + item.protein_unit * item.units;
      }, 0);
      const totalLunchFat = breakfastData.reduce((total, item) => {
        return total + item.fat_unit * item.units;
      }, 0);
      const totalLunchCarbs = lunchData.reduce((total, item) => {
        return total + item.carbs_unit * item.units;
      }, 0);

      // Calculate total macronutrient values for breakfast
      const totalDinnerCalories = dinnerData.reduce((total, item) => {
        return total + item.calories_unit * item.units;
      }, 0);
      const totalDinnerProtein = dinnerData.reduce((total, item) => {
        return total + item.protein_unit * item.units;
      }, 0);
      const totalDinnerFat = dinnerData.reduce((total, item) => {
        return total + item.fat_unit * item.units;
      }, 0);
      const totalDinnerCarbs = dinnerData.reduce((total, item) => {
        return total + item.carbs_unit * item.units;
      }, 0);

      const totalCalories = totalBreakfastCalories + totalLunchCalories + totalDinnerCalories;
      const totalProtein = totalBreakfastProtein + totalLunchProtein + totalDinnerProtein;
      const totalFat = totalBreakfastFat + totalLunchFat + totalDinnerFat;
      const totalCarbs = totalBreakfastCarbs + totalLunchCarbs + totalDinnerCarbs;

      // Update the state with the breakfast, lunch, and dinner data
      setFoodData((prevState) => ({
        ...prevState,
        breakfast: breakfastData,
        lunch: lunchData,
        dinner: dinnerData,
        totalCalories: totalCalories,
        totalProtein: totalProtein,
        totalFat: totalFat,
        totalCarbs: totalCarbs,
      }));
    } else {
      // If no entries are found, clear the breakfast, lunch, and dinner fields
      setFoodData({
        breakfast: [],
        lunch: [],
        dinner: [],
      });
    }


    const calculateTotals = () => {
      let totalCalories = 0;
      let totalProtein = 0;
      let totalFat = 0;
      let totalCarbs = 0;

      // Calculate totals for breakfast, lunch, and dinner
      ["breakfast", "lunch", "dinner"].forEach((meal) => {
        foodData[meal].forEach((item) => {
          totalCalories += item.calories_unit * item.units;
          totalProtein += item.protein_unit * item.units;
          totalFat += item.fat_unit * item.units;
          totalCarbs += item.carbs_unit * item.units;
        });
      });

      return {
        totalCalories,
        totalProtein,
        totalFat,
        totalCarbs,
      };
    };

    const { totalCalories, totalProtein, totalFat, totalCarbs } = calculateTotals();

    return (
      <>
        {/* previous code */}
        <div className="totalCalories">Total Calories: {totalCalories}</div>
        <div className="totalProtein">Total Protein: {totalProtein}</div>
        <div className="totalFat">Total Fat: {totalFat}</div>
        <div className="totalCarbs">Total Carbs: {totalCarbs}</div>
      </>
    );
  };


  console.log(foodData.breakfast);

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
                  {foodData?.breakfast.map((item, index) => (
                    <div key={index}><p>Name: {item.name}</p>
                      <p>Units: {item.units}</p>
                      <p>Calories: {item.calories_unit}</p>
                      <p>Protein: {item.protein_unit}</p>
                      <p>Carbs: {item.carbs_unit}</p>
                      <p>Fat: {item.fat_unit}</p>
                    </div>
                  ))}
                  <AddBreakfast />
                </div>
              </div>
            </div>

            <div className="lunch">
              <div className="foodItem">
                <h1>Lunch</h1>
                <div className="foodData" style={{ borderRadius: "10px" }}>
                  {foodData?.lunch.map((item, index) => (
                    <div key={index}><p>Name: {item.name}</p>
                      <p>Units: {item.units}</p>
                      <p>Calories: {item.calories_unit}</p>
                      <p>Protein: {item.protein_unit}</p>
                      <p>Carbs: {item.carbs_unit}</p>
                      <p>Fat: {item.fat_unit}</p>
                    </div>
                  ))}
                  <button>Add Entry</button>
                </div>
              </div>
            </div>

            <div className="dinner">
              <div className="foodItem">
                <h1>Dinner</h1>
                <div className="foodData" style={{ borderRadius: "10px" }}>
                  {foodData?.dinner.map((item, index) => (
                    <div key={index}><p>Name: {item.name}</p>
                      <p>Units: {item.units}</p>
                      <p>Calories: {item.calories_unit}</p>
                      <p>Protein: {item.protein_unit}</p>
                      <p>Carbs: {item.carbs_unit}</p>
                      <p>Fat: {item.fat_unit}</p>
                    </div>
                  ))}
                  <button>Add Entry</button>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="totalCalories">Total Calories {foodData?.totalCalories}</div>
            <div className="totalProtein">Total Protein {foodData?.totalProtein}</div>
            <div className="totalFat">Total Fat {foodData?.totalFat}</div>
            <div className="totalCarbs">Total Carbs {foodData?.totalCarbs}</div>
            <div style={{ width: 600, height: 400, display: "flex" }} >
              <Pie data={calorieData} options={options} width={100} height={50}
              />
              <Pie data={macroData} options={options} width={100} height={50}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>

  );
};

export default Diary;
