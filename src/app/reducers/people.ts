// these will be used as our actions identifiers
export const ADD_PERSON       = 'ADD_PERSON',
             REMOVE_PERSON    = 'REMOVE_PERSON',
             ADD_GUEST        = 'ADD_GUEST',
             REMOVE_GUEST     = 'REMOVE_GUEST',
             TOGGLE_ATTENDING = 'TOGGLE_ATTENDING';

// helper function
const changeGuest = (state, action) => {
  return state.map(person => {
    if (person.id === action.payload){
      switch (action.type) {
        case ADD_GUEST:
          // maybe I should use object.assign instead of modifying the person object
          return person.guests++;
        case REMOVE_GUEST:
          return person.guests--;
        case TOGGLE_ATTENDING:
          return person.attending = !person.attending;
        default:
          return person;
      }
    }
  });
};

// people reducer
export const people = (state = [], action) => {
  switch (action.type) {
    case ADD_PERSON:
      return [
        ...state,
        { id: action.payload.id, name: action.payload.name, guests: 0, attending: false }
      ];
    case REMOVE_PERSON:
      return state.filter(person => person.id !== action.payload)
    case ADD_GUEST:
    case REMOVE_GUEST:
    case TOGGLE_ATTENDING:
      return changeGuest(state, action);
    default:
      return state;
  }
};
