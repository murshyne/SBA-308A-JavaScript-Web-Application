export const displayExercises = (exercises) => {
  const gallery = document.getElementById("exercise-gallery");
  gallery.innerHTML = "";
  exercises.forEach((exercise) => {
    const exerciseCard = document.createElement("div");
    exerciseCard.className = "exercise-card";
    exerciseCard.innerHTML = `
            <h3>${exercise.name}</h3>
            <p>Body Part: ${exercise.bodyPart}</p>
            <p>Equipment: ${exercise.equipment}</p>
            <p>Type: ${exercise.type}</p>
        `;
    gallery.appendChild(exerciseCard);
  });
};
