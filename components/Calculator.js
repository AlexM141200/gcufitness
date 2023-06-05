import React, { useState } from "react";
import { auth, firestore } from "../pages/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Calculator = () => {

  const [user, loading, error] = useAuthState(auth);

  
  const mildWeightLoss = 500;
  const averageWeightLoss = 1000;
  const extremeWeightLoss = 1500;

  function calculate(e) {
    e.preventDefault();
    const weight = parseFloat(document.getElementById("weightKG").value);
    const height = parseFloat(document.getElementById("heightCM").value);
    const age = parseInt(document.getElementById("age").value);
    const activityLevel = parseFloat(
      document.getElementById("activityLevel").value
    );
    const goal = document.getElementById("weightLossGoal");

     

    const calculatedCalories =
     (((66.5 + 13.75 * weight + 5.003 * height - 4.676 * age) * activityLevel) - goal);
    setCalories(calculatedCalories);
  }



  const [calories, setCalories] = useState(null);

  return (
    <div className="calculator">
      <form onSubmit={calculate}>
        <label htmlFor="weightKG">What is your weight in KG?</label>
        <input type="text" name="weightKG" id="weightKG" />
        <br />
        <label htmlFor="heightCM">What is your height in CM?</label>
        <input type="text" name="heightCM" id="heightCM" />
        <br />
        <label htmlFor="age">What is your age</label>
        <input type="number" name="age" id="age" />
        <br />
        <label htmlFor="activityLevel">
          {" "}
          What is your activity level? (Refer to Table Below!)
        </label>
        <select className="activityLevel" id="activityLevel">
          <option value="1.2">1.2 - Sedentary</option>
          <option value="1.375">1.375 - Light Activity</option>
          <option value="1.5">1.550 - Moderate-Intense Activity</option>
          <option value="1.725">1.725 - Heavy Activity</option>
          <option value="1.9">1.9 - Rigorous Activity</option>
        </select>
        <label htmlFor="Goal">
          What is your weight loss goal?
        </label>
        <select className="weightLossGoal" id="weightLossGoal">
          <option value="500">Mild Weight Loss - 1lb per week</option>
          <option value="750">Average Weight Loss - 1.5lb per week</option>
          <option value="1000">Extreme Weight Loss - 2lb per week (Please consult a doctor before choosing this option!)</option>
        </select>
        <br />
        <button type="submit"> Calculate!</button>
      </form>

      {calories !== null && <p>Your calories are {calories.toFixed(2)}</p>}

      <div className="activityLevelExplain">
        <h2>Activity Level Explained!</h2>
        <img src="https://www.ideafit.com/wp-content/uploads/files/imagecache/sidebar/files/201203-ifj-feature-4.jpg" />
      </div>
    </div>
  );
};

export default Calculator;
