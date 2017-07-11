import { FETCH_WEATHER } from '../actions/index';

// doesn't do anything with the state

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            // dont do state.push() - never change state directly
            // need to return new instance of state
            // concat doesnt change existing array, creates and returns new array
            // return state.concat([ action.payload.data ]);
            // or, [action.payload.data, ...state] - which makes new array, put action.data inside, take other variable (... means might be array, so take all entries and insert in new array)
            // makes [city, city, city] instead of [city, [city, city]], which would be [action.payload.data, state]
            return [action.payload.data, ...state];
    }
    console.log("Action recieved: ", action);
    return state;
}