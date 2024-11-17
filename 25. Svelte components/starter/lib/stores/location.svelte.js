
let initialLocation = { x: 0, y: 0 };

let location = $state(initialLocation);

const useLocationStore = () => {
  return {
    get location() {
      return location;
    },
    up: () => {
      location.y++;
      location = { ...location };
    },
  };
};

export { useLocationStore };