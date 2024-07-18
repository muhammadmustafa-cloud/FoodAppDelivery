import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import MenuItemCards from '../Components/MenuItemCards';
import Color from '../Constants/Color';
import { FoodCartItems } from '../Constants/FoodMenu';

const SearchItems = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(FoodCartItems);

  const onChangeSearch = query => {
    setSearchQuery(query);
    if (query) {
      setFilteredItems(FoodCartItems.filter(item => item.name.toLowerCase().includes(query.toLowerCase())));
    } else {
      setFilteredItems(FoodCartItems);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: Color.grayColor }}>
      <Searchbar 
        placeholder='Search' 
        style={styles.searchbar} 
        onChangeText={onChangeSearch} 
        value={searchQuery}
        autoFocus
      />
      <FlatList
        data={filteredItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <MenuItemCards item={item} navigation={navigation} />
        )}
        contentContainerStyle={styles.resultsContainer}
        numColumns={2}
      />
    </View>
  );
};

export default SearchItems;

const styles = StyleSheet.create({
  searchbar: {
    margin: 10,
  },
  resultsContainer: {
    paddingHorizontal: 10,
  },
});
