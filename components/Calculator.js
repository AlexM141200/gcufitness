const Calculator = () => {
  const userInfo = {
    age: "22",
    gender: "male",
    weight: "57",
    height: "160",
    activityLevel: "1.5",
  };

  const BMR =
    66.5 +
    13.75 * userInfo.weight +
    5.003 * userInfo.height -
    4.676 * userInfo.age;

  function calculate() {}

  return (
    <div className="calculator">
      <form onSubmit={calculate}>
        <label htmlFor="weightKG">What is your weight in KG?</label>
        <input type="text" name="weightKG" id="weightKG" />
        <br />
        <label htmlFor="heightCM">What is your height in CM?</label>
        <input type="text" name="heightCM" id="weightCM" />
        <br />
        <label htmlFor="age">What is your age</label>
        <input type="number" name="age" id="age" />
        <br />
        <label htmlFor="activityLevel">
          {" "}
          What is your activity level? (Refer to Table Below!)
        </label>
        <select className="activityLevel">
          <option value="1.2">1.2 - Sedentary</option>
          <option value="1.375">1375 - Light Activity</option>
          <option value="1.5">1.550 - Moderate-Intense Activity</option>
          <option value="1.725">1.725 - Heavy Activity</option>
          <option value="1.9">1.9 - Rigorous Activity</option>
        </select>
        <br />
        <button type="submit"> Calculate!</button>
      </form>

      <p>
        Your Basal Metabolic Rate is {Math.round(BMR * userInfo.activityLevel)}{" "}
        calories.
      </p>

      <div className="activityLevelExplain">
        <h2>Activity Level Explained!</h2>
        <img src="https://www.ideafit.com/wp-content/uploads/files/imagecache/sidebar/files/201203-ifj-feature-4.jpg" />
      </div>
    </div>
  );
};

export default Calculator;
