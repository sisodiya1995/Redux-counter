function createStore(reducer) {
  // The store contains of four parts
  // 1. The state
  // 2. Access the state
  // 3. Listen to changes on the state
  // 4. Update the state // Action will update the state
  let state = 0;
  let listeners = [];
  const getState = () => state;
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };
  const dispatch = (action) => {
    // The the reducer we made for updating the state. (addTodo)
    state = reducer(state, action);
    // Inform all the listener that subscribed about the store update.
    listeners.forEach((listener) => listener());
  };
  return {
    getState,
    subscribe,
    dispatch,
  };
}
let store = Redux.createStore(reducer);

let counter = store.getState();
let step = 0;
// let max =0
let h1 = document.querySelector("h1");
h1.innerText = counter;
let increment = document.querySelector(".increment");
let decrement = document.querySelector(".decrement");
let reset = document.querySelector(".reset");

increment.addEventListener("click", () => {
  store.dispatch({ type: "increment", step: step });
});

decrement.addEventListener("click", () => {
  store.dispatch({ type: "decrement", step: step });
});

reset.addEventListener("click", () => {
  store.dispatch({ type: "reset" });
});

store.subscribe(() => {
  counter = store.getState();
  h1.innerText = counter;
});
function reducer(state = 0, action) {
  switch (action.type) {
    case "increment":
      return state + (action.step || 1);
    case "decrement":
      return state - (action.step || 1);
    case "reset":
      return 0;
    default:
      return state;
  }
}

let five = document.querySelector(".five");
five.addEventListener("click", (event) => {
  // console.log(event.target.innerText)
  step = Number(event.target.innerText);
});

let ten = document.querySelector(".ten");
ten.addEventListener("click", (event) => {
  // console.log(event.target.innerText)
  step = Number(event.target.innerText);
});

let fiveteen = document.querySelector(".fiveteen");
fiveteen.addEventListener("click", (event) => {
  // console.log(event.target.innerText)
  step = Number(event.target.innerText);
});

// extension -2

function createStore(reducer2) {
  // The store contains of four parts
  // 1. The state
  // 2. Access the state
  // 3. Listen to changes on the state
  // 4. Update the state // Action will update the state
  let state2 = 0;
  let listeners = [];
  const getState = () => state2;
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };
  const dispatch = (action) => {
    // The the reducer we made for updating the state. (addTodo)
    state2 = reducer(state2, action);
    // Inform all the listener that subscribed about the store update.
    listeners.forEach((listener) => listener());
  };
  return {
    getState,
    subscribe,
    dispatch,
  };
}
let store2 = Redux.createStore(reducer2);

let counter2 = store.getState();
let step2 = 0;
let max2 = 0;
let h2 = document.querySelector("h2");
h2.innerText = counter2;
let increment2 = document.querySelector(".increment2");
let decrement2 = document.querySelector(".decrement2");
let reset2 = document.querySelector(".reset2");

increment2.addEventListener("click", () => {
  store2.dispatch({ type: "increment2", step: step2, max: max2 });
  console.log("click me");
});

decrement2.addEventListener("click", () => {
  store2.dispatch({ type: "decrement2", step: step2 });
});

reset.addEventListener("click", () => {
  store2.dispatch({ type: "reset2" });
});

store2.subscribe(() => {
  counter2 = store2.getState();
  h2.innerText = counter2;
});
function reducer2(state2 = 0, action) {
  switch (action.type) {
    case "increment2":
      return action.max >= state2 ? state2 + (action.step || 1) : state2;
    case "decrement2":
      return action.max >= state2 ? state2 - (action.step || 1) : state2;
    case "reset2":
      return 0;
    default:
      return state2;
  }
}

let five2 = document.querySelector(".five2");
five2.addEventListener("click", (event) => {
  // console.log(event.target.innerText)
  step2 = Number(event.target.innerText);
  console.log(step2);
});

let ten2 = document.querySelector(".ten2");
ten2.addEventListener("click", (event) => {
  // console.log(event.target.innerText)
  step2 = Number(event.target.innerText);
  console.log(step2);
});

let fiveteen2 = document.querySelector(".fiveteen2");
fiveteen2.addEventListener("click", (event) => {
  // console.log(event.target.innerText)
  step2 = Number(event.target.innerText);
});

// max value

let fiveteen12 = document.querySelector(".fiveteen1");
fiveteen12.addEventListener("click", (event) => {
  // console.log(event.target.innerText)
  max2 = Number(event.target.innerText);
  console.log(max2, "max");
});

let hundred2 = document.querySelector(".hundred");
hundred2.addEventListener("click", (event) => {
  // console.log(event.target.innerText)
  max2 = Number(event.target.innerText);
  console.log(max2, "max");
});

let twohundred2 = document.querySelector(".twohundred");
twohundred2.addEventListener("click", (event) => {
  // console.log(event.target.innerText)
  max2 = Number(event.target.innerText);
  console.log(max2, "max");
});
