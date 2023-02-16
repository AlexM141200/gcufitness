import { useState } from "react";
import MyWorkouts from "./workouts/MyWorkouts";
function TabComponent() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleTabClick(0)}>My Workouts</button>
        <button onClick={() => handleTabClick(1)}>Workout Plans</button>
        <button onClick={() => handleTabClick(2)}>Create a Workout </button>
      </div>
      {activeTab === 0 && <MyWorkouts />}
      {activeTab === 1 && <p>Workout Plans</p>}
      {activeTab === 2 && <p>Create a Workout</p>}
    </div>
  );
}

export default TabComponent;
