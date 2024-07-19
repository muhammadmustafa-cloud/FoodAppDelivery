import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Header from '../Components/Header';
import DrawerScreenWrapper from '../Components/DrawerScreenWrapper';
import FoodMenu, { FoodCartItems } from '../Constants/FoodMenu';
import MenuItemCards from '../Components/MenuItemCards';
import Color from '../Constants/Color';

const Home = ({ navigation }) => {
  const [activeMenu, setActiveMenu] = useState('Foods');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(FoodCartItems.filter(item => item.category === activeMenu));

  const filterByCategory = category => {
    setActiveMenu(category);
    setSearchQuery('');
    setFilteredItems(FoodCartItems.filter(item => item.category === category));
  };

  return (
    <DrawerScreenWrapper>
      <View style={{ flex: 1, backgroundColor: Color.grayColor,  }}>
        <Header />
        <View style={{ marginTop: 5 }}>
          <Text style={styles.headerText}>Delicious {"\n"}food for you</Text>
          <TouchableOpacity activeOpacity={0.9} style={{elevation:8}} onPress={() => navigation.navigate('SearchItems')}>
            <Searchbar 
              placeholder='Search' 
              style={styles.searchbar} 
              value={searchQuery}
              editable={false} 
              pointerEvents="none"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.menuContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={FoodMenu}
            keyExtractor={item => item.id}
            style={{ overflow: 'visible' }}
            renderItem={({ item }) => {
              let isActive = item.name === activeMenu;
              return (
                <TouchableOpacity 
                  onPress={() => filterByCategory(item.name)} 
                  style={[styles.menuItem, { backgroundColor: isActive ? Color.orangeColor : Color.white }]}
                >
                  <Text style={{ color: isActive ? Color.white : Color.orangeColor, fontFamily: 'SFProDisplay-Medium' }}> 
                    {item.name} 
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent} horizontal>
          {filteredItems.map((item, index) => (
            <MenuItemCards item={item} navigation={navigation} index={index} key={index} />
          ))}
        </ScrollView>
      </View>
    </DrawerScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerText: {
    fontFamily: 'SFProDisplay-Semibold',
    fontSize: 40,
    paddingHorizontal: '12%',
    color: "#000",
    marginBottom: 15,
  },
  searchbar: {
    width: '80%',
    alignSelf: 'center',
    marginBottom: '10%',
  },
  menuContainer: {
    marginHorizontal: 9,
    marginTop: '1%',
    marginBottom: '7%',
  },
  menuItem: {
    padding: 6,
    paddingHorizontal: 15,
    borderRadius: 50,
    marginRight: 18,
  },
  scrollViewContent: {
    paddingHorizontal: 20,
  },
});
