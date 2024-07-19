import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import MenuItemCards from '../Components/MenuItemCards';
import Color from '../Constants/Color';
import { FoodCartItems } from '../Constants/FoodMenu';
import Feather from 'react-native-vector-icons/Feather'

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
      {
        filteredItems.length === 0 ? (
          <View style={{flex: 1, alignItems: 'center', marginVertical: 'auto', justifyContent: 'center'}}>
            <Feather color={Color.iconColor} name="search" size={110} />
            <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Semibold', fontSize: 30, marginBottom: 5 }}>Item not found</Text>
            <Text style={{ color: Color.iconColor, fontFamily: 'SFProDisplay-Regular', width: '50%', textAlign: 'center' }}>Try searching the item with
            a different keyword.</Text>
 
          </View>
        )
          :
          (
            <FlatList
              data={filteredItems}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <MenuItemCards item={item} navigation={navigation} />
              )}
              contentContainerStyle={styles.resultsContainer}
              numColumns={2}
            />
          )}
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
