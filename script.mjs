import { fetchExercises } from "./api_module.mjs";
import { displayExercises } from "./exe_gal.mjs";

document.getElementById("search-btn").addEventListener("click", async () => {
  const query = document.getElementById("search").value;
  const exercises = await fetchExercises(query);
  displayExercises(exercises);
});
