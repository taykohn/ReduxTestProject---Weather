import axios from 'axios';

const API_KEY = '0001fa10f27a7d274a553471fd5688b7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?q=`

// do this to keep our action types consistent between action creators and our reducers
// extract type of action to separate variable and export it. assign it to the const FETCH_WEATHER.
//    instead of using a string as type, assign it to FETCH_WEATHER variable.
// for example, if someone changed FETCH_WEATHER var, would be inconsistent between action creator and reducer, causing a bug
//  will refernce same var in reducer so we don't have to be copying strings between files. single source of action type.
//  so, could change string in future and would remain consistent between action and reducers.
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}${city},us&APPID=${API_KEY}`;
  const request = axios.get(url);
  console.log("Request: ", request);

  // redux-promise checks if action has promise as payload
  //    if not, lets it go through to reducers
  //    if it does, stop action, after promise resolved, create new action and send through to reducers.
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

// submit form, creates action w city. axios makes request and returns promise
// promise is data structure, doesn't actually contain any of our data
// returning the promise on the payload key