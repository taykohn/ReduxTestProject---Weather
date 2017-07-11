// import necessary things
//    connect method to connect container to redux (work w redux directly)
//    bind action fetch weather to container - bindActionCreators
//    import action creator


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

// need to bind search-bar container to redux using connect method from react-redux library
// also going to bind action creator fetch weather as a property to this container

class SearchBar extends Component {
constructor(props) {
  super(props);

  this.state = { term: '' };
  // take existing function, bind to this, and replace existing function with same function but correct context
  // binds this of component to onInputChange. if this isn't done, context of onInputChange will be incorrect
  this.onInputChange = this.onInputChange.bind(this);
  this.onFormSubmit = this.onFormSubmit.bind(this);
}

onInputChange(event) {
  console.log(event.target.value);
  // in this case, this is not the react search bar component. when call a callback like onInputChange and reference this,
  //   this will have incorrect context.
  // because of this, need to bind context of onInputChange.
  this.setState({ term: event.target.value });
}

onFormSubmit(event) {
  event.preventDefault();

  // go fetch weather data
  this.props.fetchWeather(this.state.term);
  // reset state, rerender component and empty input on enter.
  this.setState({ term: '' });
}

  render() {
    // need onFormSubmit so something happens when form submitted. otherwise just resets.
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
  // bind action creator fetchWeather with dispatch - make sure action flows down into middleware and then reducers inside our redux app

  return bindActionCreators({ fetchWeather}, dispacth);
}

// previously had containers where we map dispatch to props and we map state to props as well.
// passing in null because whenever we are passing in a function that is supposed to map our dispatch to the props of our container,
//   it alwayds goes in as the secvond arg.
//   null - understand that redux is maintaining some state but this container doesn't care

export default connect(null, mapDispatchToProps)(SearchBar);
