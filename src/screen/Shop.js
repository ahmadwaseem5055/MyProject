import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const categories = [
  { id: 1, name: 'New', image: require('../images/shop1.png') },
  { id: 2, name: 'Clothes', image: require('../images/shop2.png') },
  { id: 3, name: 'Shoes', image: require('../images/shop3.png') },
  { id: 4, name: 'Accessories', image: require('../images/shop1.png') },
];

const Shop = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('Women'); // State for the selected tab

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
    if (tab === 'Women') {
      navigation.navigate('Women'); // Navigate to Women screen
    }
    // You can add navigation for other tabs (Men, Kids) here as well
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F7F7F7' }}>
      {/* Categories Tabs */}
      <View style={styles.tabsContainer}>
        {['Women', 'Men', 'Kids'].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => handleTabPress(tab)}
            style={[
              styles.tab,
              selectedTab === tab && styles.selectedTab, // Add red bottom border if selected
            ]}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.selectedTabText, // Highlight text if selected
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Scrollable Content */}
      <ScrollView>
        {/* Summer Sales Banner */}
        <View style={styles.banner}>
          <Text style={styles.bannerText}>SUMMER SALES</Text>
          <Text style={styles.bannerSubText}>Up to 50% off</Text>
        </View>

        {/* Category List */}
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryItem}
            onPress={() => {
              // Navigate or do something on category click
            }}
          >
            <Text style={styles.categoryText}>{category.name}</Text>
            <Image
              source={category.image}
              style={styles.categoryImage}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tab: {
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent', // Default bottom border (no color)
  },
  selectedTab: {
    borderBottomColor: 'red', // Red bottom border for selected tab
  },
  tabText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  selectedTabText: {
    color: 'red', // Red text for the selected tab
  },
  banner: {
    backgroundColor: 'red',
    padding: 30,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  bannerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bannerSubText: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 18,
    flex: 1,
    color: '#333',
  },
  categoryImage: {
    width: 80,
    height: 110,
    borderRadius: 10,
  },
});

export default Shop;
