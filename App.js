/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';

import SelectMultiple from 'react-native-select-multiple';

const fruits = ['Apples', 'Oranges', 'Pears'];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFruits: [],
    };
  }

  onSelectionsChange = selectedFruits => {
    // selectedFruits is array of { label, value }
    this.setState({selectedFruits});
  };

  render() {
    return (
      <View style={{flex: 1, marginTop: 100}}>
        <Text>Select Many</Text>

        <SelectMultiple
          items={fruits}
          selectedItems={this.state.selectedFruits}
          onSelectionsChange={this.onSelectionsChange}
        />
      </View>
    );
  }
}
export default App;
