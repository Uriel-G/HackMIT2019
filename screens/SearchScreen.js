import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';


export default class SearchScreen extends React.Component{
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
      placeholder="Type Here..."
      onChangeText={this.updateSearch}
      value={search}
      lightTheme={true}
    />
    );
  }
}

SearchScreen.navigationOptions = {
  title: 'Search',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
