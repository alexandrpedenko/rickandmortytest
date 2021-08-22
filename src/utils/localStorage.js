export function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('watchList', serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

export function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem('watchList');
    if (serialisedState === null) return undefined;
    return { myWatchList: JSON.parse(serialisedState) };
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}
