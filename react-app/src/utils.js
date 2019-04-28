/*
  Dog requests
*/

export const fetchDogs = () =>
  fetch("http://localhost:3000/dogs").then(res => res.json());

export const fetchDog = id =>
  fetch(`http://localhost:3000/dogs/${id}`).then(res => res.json());

export const saveDog = newDog =>
  fetch("http://localhost:3000/dogs", {
    method: "POST",
    body: JSON.stringify(newDog),
    headers: {
      "Content-type": "application/json"
    }
  }).then(response => response.json());

export const updateDog = (prevDogId, newDog) =>
  fetch(`http://localhost:3000/dogs/${prevDogId}`, {
    method: "PUT",
    body: JSON.stringify(newDog),
    headers: {
      "Content-type": "application/json"
    }
  }).then(response => response.json());

export const deleteDog = dogId =>
  fetch(`http://localhost:3000/dogs/${dogId}`, {
    method: "DELETE"
  });

/*
  Car requests
*/

export const fetchCats = () =>
  fetch("http://localhost:3000/cats").then(res => res.json());

export const fetchCat = id =>
  fetch(`http://localhost:3000/cats/${id}`).then(res => res.json());

export const saveCat = newCat =>
  fetch("http://localhost:3000/cats", {
    method: "POST",
    body: JSON.stringify(newCat),
    headers: {
      "Content-type": "application/json"
    }
  }).then(response => response.json());

export const updateCat = (prevCatId, newCat) =>
  fetch(`http://localhost:3000/cats/${prevCatId}`, {
    method: "PUT",
    body: JSON.stringify(newCat),
    headers: {
      "Content-type": "application/json"
    }
  }).then(response => response.json());

export const deleteCat = catId =>
  fetch(`http://localhost:3000/cats/${catId}`, {
    method: "DELETE"
  });
