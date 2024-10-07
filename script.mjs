import { fetchExercises } from "./api_module.mjs";
import { displayExercises } from "./exe_gal.mjs";

document.getElementById("search-btn").addEventListener("click", async () => {
  const exercises = await fetchExercises();
  displayExercises(exercises);
});

document
  .getElementById("exercise-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const newExercise = {
      name: document.getElementById("exercise-name").value,
      bodyPart: document.getElementById("exercise-bodyPart").value,
      equipment: document.getElementById("exercise-equipment").value,
      type: document.getElementById("exercise-type").value,
    };

    await addExercise(newExercise);
    alert("Exercise added successfully!");
    const exercises = await fetchExercises();
    displayExercises(exercises);
  });