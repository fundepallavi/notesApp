export const ADD_NOTES = "ADD_NOTES";
export const REMOVE_NOTES = "REMOVE_NOTES";
export const UPDATE_NOTES = "UPDATE_NOTES";

let nextId = 0;

export function addNotes(title, content) {
  return {
    type: ADD_NOTES,
    id: nextId++,
    title,
    content
  };
}

export function removeNotes(id) {
  return {
    type: REMOVE_NOTES,
    id
  };
}

export function updateNotes(id, title, content) {
  return {
    type: UPDATE_NOTES,
    id,
    title,
    content
  };
}
