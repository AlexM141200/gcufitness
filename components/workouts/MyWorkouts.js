import { useState, useEffect } from "react";
import { auth, firestore } from "../../pages/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

function WorkoutItem({ name, url }) {
  return (
    <div>
      <a href={url}>{name}</a>
    </div>
  );
}

function MyWorkouts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [workouts, setWorkouts] = useState([]);

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    const fetchWorkouts = async () => {
      if (user) {
        const userRef = doc(firestore, "users", user.uid);
        const myWorkoutsRef = doc(userRef, "userWorkouts", "myWorkouts");
        const myWorkoutsDoc = await getDoc(myWorkoutsRef);

        if (myWorkoutsDoc.exists()) {
          const workoutNames = [];

          // Get the names of each collection within the myWorkouts document
          const collectionRefs = await getDocs(myWorkoutsDoc.ref.listCollections());
          collectionRefs.forEach((collectionRef) => {
            workoutNames.push(collectionRef.id);
          });

          // Update state with the list of workout names
          setWorkouts(
            workoutNames.map((name) => ({
              id: name,
              name: name,
              url: `/userWorkouts/myWorkouts/${name}`,
            }))
          );
        }
      }
    };

    fetchWorkouts();
  }, [user]);

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
