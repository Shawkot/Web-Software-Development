
let initialLocation = { x: 0, y: 0 };

let location = $state(
  typeof window !== "undefined" && localStorage.getItem('location')
    ? JSON.parse(localStorage.getItem('location'))
    : initialLocation
);

const saveToLocalStorage = () => {
  location = {...location};
  localStorage.setItem('location', JSON.stringify(location));
};

const useLocationStore = () => {
  return {
    get location() {
      return location;
    },
    up: () => {
      location.y++;
      saveToLocalStorage();
    },
    down: () => {
      location.y--;
      saveToLocalStorage();
    },
    left: () => {
      location.x--;
      saveToLocalStorage();
    },
    right: () => {
      location.x++;
      saveToLocalStorage();
    }
  };
};

export { useLocationStore };