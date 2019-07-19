import React from 'react';
import { connect } from 'react-redux';

// import actions
import { CharacterList } from '../components';
import { getCharacters } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      return <h1>Loading Characters...</h1>;
    }
    return (
      <div className='CharactersList_wrapper'>
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching
  };
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { getCharacters }
)(CharacterListView);
