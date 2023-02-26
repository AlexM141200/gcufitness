import { useState } from "react";
import { auth } from "../../pages/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function WorkoutItem({ name, url }) {
  return (
    <div>
      <a href={url}>{name}</a>
    </div>
  );
}

function MyWorkouts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [workouts, setWorkouts] = useState([
    { id: 1, name: "Workout 1", url: "https://example.com/workout1" },
    { id: 2, name: "Workout 2", url: "https://example.com/workout2" },
    { id: 3, name: "Workout 3", url: "https://example.com/workout3" },
    { id: 4, name: "Workout 4", url: "https://example.com/workout4" },
  ]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredWorkouts = workouts.filter((workout) =>
    workout.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Workouts</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
        placeholder="Search"
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {filteredWorkouts.map((workout) => (
            <tr key={workout.id}>
              <td>
                <WorkoutItem name={workout.name} url={workout.url} />
              </td>
              <td>
                <a href={workout.url}>Go to workout</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyWorkouts;
