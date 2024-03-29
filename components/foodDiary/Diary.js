import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setDefaultLocale, registerLocale } from "react-datepicker";
import { query, deleteDoc, doc, getDoc, setDoc, collection, getDocs, docs, where } from "firebase/firestore";
import { enGB } from "date-fns/locale/en-GB";
import React, { useState, useEffect } from "react";
import AddEntry from "./AddEntry";
import { auth, firestore } from "../../pages/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData, useCollectionData } from "react-firebase-hooks/firestore";
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
import 'chart.js/auto';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


registerLocale("enGB", enGB);

function Diary() {
  const [user, loading, error] = useAuthState(auth);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dateInt, setDateInt] = useState(selectedDate.toDateString());
  const [foodData, setFoodData] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
  });


  const [maxCalories, setMaxCalories] = useState(0);

  const [proteinGoal, carbGoal, fatGoal] = [0, 0, 0];

  const getUserMaxCalories = async () => {
    const userRef = doc(firestore, "users", user.uid, "userGoals", "userProfile");
    const userDoc = await getDoc(userRef);
    const userData = userDoc.data();
    const maxCalories = userData.recommendedCalories;
    setMaxCalories(maxCalories);
  };

  useEffect(() => {
    if (user) {
      getUserMaxCalories();
    }
  }, [user]);



  const macroData = {
    labels: ['Fats', 'Carbohydrates', 'Protein'],
    datasets: [
      {
        label: 'Grams',
        data: [foodData.totalFat, foodData.totalCarbs, foodData.totalProtein],
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
        data: [foodData.totalCalories, maxCalories - foodData.totalCalories],
        backgroundColor: [
          'rgb(102,153,204)',
          'rgba(54, 162, 235, 0.2)'
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




  const handleDelete = async (meal, name) => {
    const originalDate = selectedDate;
    const dateObj = new Date(originalDate);
    const formattedDate = dateObj.toLocaleDateString("en-GB").replace(/\//g, "-").toString();

    const userRef = doc(firestore, "users", user.uid);
    const diaryRef = collection(userRef, "foodDiary", formattedDate, meal);

    if (name) {
      const querySnapshot = await getDocs(query(diaryRef, where("name", "==", name)));
      const docToDelete = querySnapshot.docs[0];

      if (docToDelete.exists()) {
        await deleteDoc(docToDelete.ref);
        console.log(`${name} has been deleted from the ${meal} meal.`);
      } else {
        console.log(`The document with name ${name} does not exist.`);
      }
    } else {
      console.log(`The name variable is undefined or null.`);
    }
  };


  useEffect(() => {
    if (user) {
      fetchFoodData(selectedDate);
    }
    const formattedDate = selectedDate.toDateString();
    setDateInt(formattedDate);
  }, [selectedDate, user]);

  const fetchFoodData = async (date) => {
    const userRef = doc(firestore, "users", user.uid);
    const diaryDate = date.toLocaleDateString("en-GB").replace(/\//g, "-");
    const diaryRef = doc(userRef, "foodDiary", diaryDate);
    const diaryDocSnap = await getDoc(diaryRef);


    if (diaryDocSnap.exists()) {
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
        return total + item.calories;// * item.units;
      }, 0);
      const totalBreakfastProtein = breakfastData.reduce((total, item) => {
        return total + item.protein;// * item.units;
      }, 0);
      const totalBreakfastFat = breakfastData.reduce((total, item) => {
        return total + item.fat;// * item.units;
      }, 0);
      const totalBreakfastCarbs = breakfastData.reduce((total, item) => {
        return total + item.carbohydrates;// * item.units;
      }, 0);

      // Calculate total macronutrient values for breakfast
      const totalLunchCalories = lunchData.reduce((total, item) => {
        return total + item.calories;// * item.units;
      }, 0);
      const totalLunchProtein = lunchData.reduce((total, item) => {
        return total + item.protein;// * item.units;
      }, 0);
      const totalLunchFat = breakfastData.reduce((total, item) => {
        return total + item.fat;// * item.units;
      }, 0);
      const totalLunchCarbs = lunchData.reduce((total, item) => {
        return total + item.carbohydrates;// * item.units;
      }, 0);

      // Calculate total macronutrient values for dinner
      const totalDinnerCalories = dinnerData.reduce((total, item) => {
        return total + item.calories;
      }, 0);
      const totalDinnerProtein = dinnerData.reduce((total, item) => {
        return total + item.protein;
      }, 0);
      const totalDinnerFat = dinnerData.reduce((total, item) => {
        return total + item.fat;
      }, 0);
      const totalDinnerCarbs = dinnerData.reduce((total, item) => {
        return total + item.carbohydrates;
      }, 0);

      const totalCalories = totalBreakfastCalories + totalLunchCalories + totalDinnerCalories;
      const totalProtein = totalBreakfastProtein + totalLunchProtein + totalDinnerProtein;
      const totalFat = totalBreakfastFat + totalLunchFat + totalDinnerFat;
      const totalCarbs = totalBreakfastCarbs + totalLunchCarbs + totalDinnerCarbs;


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
      setFoodData({
        breakfast: [],
        lunch: [],
        dinner: [],
      });
    }


  };


  /*
    const userRef = doc(firestore, "users", user.uid);
    const diaryDate = selectedDate.toLocaleDateString("en-GB").replace(/\//g, "-");
    const diaryRef = doc(userRef, "foodDiary", diaryDate);
  
    const breakfastRef = collection(diaryRef, "breakfast");
    const lunchRef = collection(diaryRef, "lunch");
    const dinnerRef = collection(diaryRef, "dinner")
  
  
    const [breakfastTest] = useCollectionData(breakfastRef);
    const [lunchTest] = useCollectionData(lunchRef);
    const [dinnerTest] = useCollectionData(dinnerRef);
    console.log(breakfastTest);
  
    const calculateTotal = (array) => {
      return array.reduce((accumulator, currentValue) => {
        return {
          calories: accumulator.calories + currentValue.calories,
          fat: accumulator.fat + currentValue.fat,
          protein: accumulator.protein + currentValue.protein,
        };
      }, { calories: 0, fat: 0, protein: 0 });
    };
  */
  //const breakfastTotals = calculateTotal(breakfastTest);
  //const lunchTotals = calculateTotal(lunchTest);
  //const dinnerTotals = calculateTotal(dinnerTest);

  // console.log("Breakfast totals: ", breakfastTotals);
  //console.log("Lunch totals: ", lunchTotals);
  //console.log("Dinner totals: ", dinnerTotals);

  return (
    <>
      {user ? (
        <div>
          <div>
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
                <button onClick={() =>
                  setSelectedDate(new Date(selectedDate))}>
                  <i>Reload</i>
                </button>
              </div>

              <div className="container">
                <div className="breakfast">
                  <div className="foodItem">
                    <h1>Breakfast</h1>
                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Units</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Protein</TableCell>
                            <TableCell align="right">Carbs</TableCell>
                            <TableCell align="right">Fat</TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {foodData.breakfast.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell component="th" scope="row">{item.name}</TableCell>
                              <TableCell align="right">{item.units ?? 1}</TableCell>
                              <TableCell align="right">{item.calories}</TableCell>
                              <TableCell align="right">{item.protein}</TableCell>
                              <TableCell align="right">{item.carbohydrates}</TableCell>
                              <TableCell align="right">{item.fat}</TableCell>
                              <TableCell align="right">
                                <Button variant="contained" color="error" onClick={() => handleDelete('breakfast', item.name)}>Delete</Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                  <AddEntry meal={"breakfast"} date={dateInt} />
                </div>

                <div className="lunch">
                  <div className="foodItem">
                    <h1>Lunch</h1>
                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Units</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Protein</TableCell>
                            <TableCell align="right">Carbs</TableCell>
                            <TableCell align="right">Fat</TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {foodData.lunch.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell component="th" scope="row">{item.name}</TableCell>
                              <TableCell align="right">{item.units ?? 1}</TableCell>
                              <TableCell align="right">{item.calories}</TableCell>
                              <TableCell align="right">{item.protein}</TableCell>
                              <TableCell align="right">{item.carbohydrates}</TableCell>
                              <TableCell align="right">{item.fat}</TableCell>
                              <TableCell align="right">
                                <Button variant="contained" color="error" onClick={() => handleDelete('lunch', item.name)}>Delete</Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                  <AddEntry meal={"lunch"} date={dateInt} />
                </div>

                <div className="dinner">
                  <div className="foodItem">
                    <h1>Dinner</h1>
                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Units</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Protein</TableCell>
                            <TableCell align="right">Carbs</TableCell>
                            <TableCell align="right">   Fat</TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {foodData.dinner.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell component="th" scope="row">{item.name}</TableCell>
                              <TableCell align="right">{item.units ?? 1}</TableCell>
                              <TableCell align="right">{item.calories}</TableCell>
                              <TableCell align="right">{item.protein}</TableCell>
                              <TableCell align="right">{item.carbohydrates}</TableCell>
                              <TableCell align="right">{item.fat}</TableCell>
                              <TableCell align="right">
                                <Button variant="contained" color="error" onClick={() => handleDelete('dinner', item.name)}>Delete</Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                  <AddEntry meal={"dinner"} date={dateInt} />
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />


          <div style={{ width: 600, height: 400, display: "flex" }} >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Pie data={calorieData} options={options} width={100} height={50} />
              <div className="totalCalories">Total Calories {foodData?.totalCalories}</div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <Pie data={macroData} options={options} width={100} height={50} />
              <div className="totalProtein">Total Protein {foodData?.totalProtein}</div>
              <div className="totalFat">Total Fat {foodData?.totalFat}</div>
              <div className="totalCarbs">Total Carbs {foodData?.totalCarbs}</div>
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
