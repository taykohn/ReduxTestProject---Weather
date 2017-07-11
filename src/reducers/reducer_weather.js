import { FETCH_WEATHER } from '../actions/index';

// Doesn't do anything with the state

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            // Don't do state.push() - never change the state directly
            // Need to return a new instance of state
            // concat doesn't change existing state array, instead creates and returns new array
            // Return state.concat([ action.payload.data ]) OR
            //  [action.payload.data, ...state] - which makes new array, 
            //      puts action.data inside, and adds other variable 
            /// (... means state object might be an array, so take all entries and insert in new flattened array)
            //  makes [city, city, city] instead of [city, [city, city]], which would be [action.payload.data, state]
            return [action.payload.data, ...state];
    }
    console.log("Action recieved: ", action);
    return state;
}