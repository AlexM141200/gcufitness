import React, { useState } from "react";

const Calculator = () => {
  const userInfo = {
    age: "22",
    gender: "male",
    weight: "57",
    height: "160",
    activityLevel: "1.5",
  };

  function calculate(e) {
    e.preventDefault();
    const weight = parseFloat(document.getElementById("weightKG").value);
    const height = parseFloat(document.getElementById("heightCM").value);
    const age = parseInt(document.getElementById("age").value);
    const activityLevel = parseFloat(
      document.getElementById("activityLevel").value
    );
    const calculatedCalories =
      (66.5 + 13.75 * weight + 5.003 * height - 4.676 * age) * activityLevel;
    setCalories(calculatedCalories);
  }

  const BMR =
    66.5 +
    13.75 * userInfo.weight +
    5.003 * userInfo.height -
    4.676 * userInfo.age;

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
