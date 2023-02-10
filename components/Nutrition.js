import React from "react";
const Nutrition = ({ item }) => {
  return (
    <div className="submenu">
      <h3>Food : {item.name}</h3>
      <ul style={{ listStyle: "none" }}>
        <li>Serving size: {item.serving_size} </li>
        <br />
        <li>Calories per serving: {item.calories}</li>
        <br />
        <li>Total fat per serving: {item.total_fat} </li>
        <br />
        <li>Saturated fat per serving: {item.saturated_fat} </li>
        <br />
        <li>Trans fat per serving: {item.trans_fat} </li>
        <br />
        <li>Cholesterol per serving: {item.cholesterol} </li>
        <br />
        <li>Sodium per serving: {item.sodium} </li>
        <br />
        <li>Total carbohydrates per serving: {item.total_carbohydrates} </li>
        <br />
        <li>Dietary fiber per serving: {item.dietary_fiber} </li>
        <br />
        <li>Sugars per serving: {item.sugars} </li>
        <br />
        <li>Protein per serving: {item.protein} </li>
      </ul>
    </div>
  );
};
export default Nutrition;
