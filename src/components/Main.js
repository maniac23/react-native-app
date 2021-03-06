import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './PlaceInput/PlaceInput';
import PlaceList from './PlaceList/PlaceList';
import PlaceDetail from './PlaceDetail/PlaceDetail';
import { connect } from 'react-redux';
import {
  addPlace,
  deletePlace,
  selectPlace,
  unselectPlace
} from '../store/actions';

class Main extends Component {
  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  };

  modalClosedHandler = () => {
    this.props.onUnselectPlace();
  };

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: placeName => dispatch(addPlace(placeName)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: placeKey => dispatch(selectPlace(placeKey)),
    onUnselectPlace: () => dispatch(unselectPlace())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
