import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';


const   Search = ({ navigation }) => {
  const categories = [
    'Tops', 'Shirts & Blouses', 'Cardigans & Sweaters', 'Knitwear',
    'Blazers', 'Outerwear', 'Pants', 'Jeans', 'Shorts', 'Skirts', 'Dresses'
  ];

  const renderCategory = ({ item }) => (
    <View style={styles.categoryItem}>
      <Text style={styles.categoryText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>

      {/* Header with back button and search icon */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
         
        
         
        </TouchableOpacity>
      </View>

      {/* View All Items button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>VIEW ALL ITEMS</Text>
      </TouchableOpacity>

      {/* Choose category text */}
      <Text style={styles.chooseCategoryText}>Choose category</Text>

      {/* Categories list */}
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FF3D00',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  chooseCategoryText: {
    fontSize: 16,
    color: '#999',
    marginBottom: 16,
  },
  categoryItem: {
    paddingVertical: 17,
    paddingHorizontal: 17,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  categoryText: {
    fontSize: 17,
    color: 'black',
  },
});

export default Search;
