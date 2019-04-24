// import React, { Component } from 'react';
// import { StyleSheet, View } from 'react-native';

// import PlaceInput from './src/components/PlaceInput/PlaceInput';
// import PlaceList from './src/components/PlaceList/PlaceList';
// import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
// import { connect } from 'react-redux';
// import {
//   addPlace,
//   deletePlace,
//   selectPlace,
//   unselectPlace
// } from './src/store/actions';

// class App extends Component {
// state = {
//   places: [],
//   selectedPlace: null
// };
// placeAddedHandler = placeName => {
//   this.setState(prevState => {
//     return {
//       places: prevState.places.concat({
//         name: placeName,
//         key: Math.random(),
//         image: {
//           uri: 'https://picsum.photos/200/300'
//         }
//       })
//     };
//   });
// };
// placeDeletedHandler = () => {
//   this.setState(prevState => {
//     return {
//       places: prevState.places.filter(
//         place => place.key !== prevState.selectedPlace.key
//       ),
//       selectedPlace: null
//     };
//   });
// };
// modalClosedHandler = () => {
//   this.setState({
//     selectedPlace: null
//   });
// };
// render() {
//   return (
//     <View style={styles.container}>
//       <PlaceDetail
//         selectedPlace={this.state.selectedPlace}
//         onItemDeleted={this.placeDeletedHandler}
//         onModalClosed={this.modalClosedHandler}
//       />
//       <PlaceInput onPlaceAdded={this.placeAddedHandler} />
//       <PlaceList
//         places={this.state.places}
//         onItemSelected={this.placeSelectedHandler}
//       />
//     </View>
//   );
// }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 40,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'flex-start'
//   }
// });

// const mapStateToProps = state => {
//   return {
//     places: state.places.places,
//     selectedPlace: state.places.selectedPlace
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPlace: placeName => dispatch(addPlace(placeName)),
//     onDeletePlace: () => dispatch(deletePlace()),
//     onSelectPlace: key => dispatch(selectPlace(key)),
//     onUnselectPlace: () => dispatch(deselectPlace())
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);

import React from 'react';
import Main from './src/components/Main';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <A />
  </Provider>
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
