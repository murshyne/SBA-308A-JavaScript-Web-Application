// api.js
const API_URL = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back";

export const fetchExercises = async (query) => {
  try {
    const response = await fetch(`${API_URL}?limit=10&offset=0`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        "x-rapidapi-key: 99665d3892mshdcafa0a82446451p12dd3ajsnb1dbafe836f9":

        "Content-Type", "application/json":
      },
    });

    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data; // Return the entire data structure
  } catch (error) {
    console.error("Failed to fetch exercises:", error);
    return [];
  }
};
