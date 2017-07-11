// imports
//    connect method to connect container to redux (work with redux directly)
//    bindActionCreators - bind action fetchWeather to container
//    action creator fetchWeather


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
constructor(props) {
  super(props);

  this.state = { term: '' };
  // Take an existing function, bind to this, and replace existing function with same function but in the correct context
  // Binds this of component to onInputChange. If not done, context of onInputChange will be incorrect
  this.onInputChange = this.onInputChange.bind(this);
  this.onFormSubmit = this.onFormSubmit.bind(this);
}

onInputChange(event) {
  console.log(event.target.value);
  // In this case, this is not the react search bar component. When call a callback like onInputChange and reference this,
  //   this will have incorrect context.
  // Solved by binding the context of onInputChange (done in constructor)
  this.setState({ term: event.target.value });
}

onFormSubmit(event) {
  event.preventDefault();

  // Go fetch weather data
  this.props.fetchWeather(this.state.term);
  // Reset state, rerender component and empty input on enter.
  this.setState({ term: '' });
}

  render() {
    // Need onFormSubmit so something happens when form submitted. Otherwise form just resets.
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five day forecast in your fav cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispacth) {
  // Bind action creator fetchWeather with dispatch - make sure action flows down into middleware and then reducers inside our redux app
  return bindActionCreators({ fetchWeather}, dispacth);
}

// Need to bind SearchBar container to redux using the connect method from react-redux library
// Second argument ensures that the action creator fetchWeather will be binded as a property to this container

// Previously had containers where we map dispatch to props and we map state to props as well.
// First argument is null because this container does not care about the state being maintained by redux.
export default connect(null, mapDispatchToProps)(SearchBar);
