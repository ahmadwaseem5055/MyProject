import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Modal,
} from 'react-native';

const products = [
  {
    id: '1',
    title: 'Basic T-Shirt',
    brand: 'Brand A',
    price: 19.99,
    image: require('../../images/card1.png'),
  },
 
  {
    id: '2',
    title: 'Casual Blouse',
    brand: 'Brand B',
    price: 29.99,
    image: require('../../images/card2.png'),
  },
  {
    id: '3',
    title: 'Stylish Top',
    brand: 'Brand C',
    price: 24.99,
    image: require('../../images/card2.png'),
  },
  {
    id: '4',
    title: 'Stylish Top',
    brand: 'Brand C',
    price: 24.99,
    image: require('../../images/card3.png'),
  },{
    id: '5',
    title: 'Stylish Top',
    brand: 'Brand C',
    price: 24.99,
    image: require('../../images/card2.png'),
  },{
    id: '6',
    title: 'Stylish Top',
    brand: 'Brand C',
    price: 24.99,
    image: require('../../images/card3.png'),
  },{
    id: '7',
    title: 'Stylish Top',
    brand: 'Brand C',
    price: 24.99,
    image: require('../../images/card1.png'),
  },{
    id: '8',
    title: 'Stylish Top',
    brand: 'Brand C',
    price: 24.99,
    image: require('../../images/card3.png'),
  },{
    id: '9',
    title: 'Stylish Top',
    brand: 'Brand C',
    price: 24.99,
    image: require('../../images/card2.png'),
  },
];

const Women = () => {
  const [isGridView, setIsGridView] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState('Sort by');

  // Function to toggle grid and list view
  const toggleLayout = () => {
    setIsGridView(!isGridView);
  };

  // Function to toggle modal visibility
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Function to handle sort option selection
  const handleSortSelection = option => {
    setSelectedSortOption(option);
    toggleModal();
  };

  return (
    <View>
      <View style = {{ display : 'flex' , backgroundColor: '#ffffff' , padding: 10 , gap : 20 ,flexDirection: 'column' , marginBottom: 20}}>
      {/* Header Section */}
      <View >
        <Text style={{fontSize: 40, fontWeight: 'bold', color: 'black'}}>
          Women's Tops
        </Text>
      </View>

      {/* Category Filter */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
       >
        {['T-shirts', 'Crop tops', 'Sleeveless', 'Shorts'].map(
          (category, index) => (
            <TouchableOpacity
              key={index}
              style={{
                width: 120,
                height: 40,
                backgroundColor: '#222222',
                borderRadius: 30,
                marginHorizontal: 5,
                justifyContent: 'center',
                alignItems: 'center',
                
              }}>
              <Text style={{fontSize: 16, textAlign: 'center', color: 'white'}}>
                {category}
              </Text>
            </TouchableOpacity>
          ),
        )}
      </ScrollView>

      {/* Filters and Sorting Section */}
     
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          backgroundColor: '#EFEFEF',
         
        }}>
        {/* Filters Button */}
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../images/filter.png')}
            style={{width: 20, height: 20, marginRight: 5}}
          />
          <Text style={{fontSize: 16}}>Filters</Text>
        </TouchableOpacity>

        {/* Sort Button */}
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={toggleModal}>
          <Image
            source={require('../../images/price.png')}
            style={{width: 20, height: 20, marginRight: 5}}
          />
          <Text style={{fontSize: 16}}>{selectedSortOption}</Text>
        </TouchableOpacity>

        {/* Grid/List Toggle Button */}
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={toggleLayout}>
          <Image
            source={require('../../images/grid.png')}
            style={{width: 20, height: 20, marginRight: 5}}
          />
        </TouchableOpacity>
      </View>
      </View>
      {/* Modal for Sort Options */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}>
    <View
  style={{
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }}>
  <View
    style={{
      backgroundColor: 'white',
      padding: 20,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
    }}>
    <Text
      style={{
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
        textAlign: 'center', 
      }}>
      Sort by
    </Text>
    {[
      'Popular',
      'Newest',
      'Customer review',
      'Price: lowest to high',
      'Price: highest to low',
    ].map((option, index) => (
      <TouchableOpacity
        key={index}
        style={{
          paddingVertical: 15,
          borderBottomWidth: 1,
          borderBottomColor: '#eee',
          backgroundColor: selectedSortOption === option ? 'red' : 'transparent', // Change background color when selected
        }}
        onPress={() => handleSortSelection(option)}>
        <Text
          style={{
            fontSize: 20,
            color: selectedSortOption === option ? 'white' : 'black', // Change text color based on selection
          }}>
          {option}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
</View>

      </Modal>

      {/* Product List / Grid */}
      <FlatList
        data={products}
        key={isGridView ? 'g' : 'l'}
        keyExtractor={item => item.id}
        numColumns={isGridView ? 2 : 1}
        renderItem={({item}) => (
          <View
            style={
              isGridView
                ? {flex: 1, padding: 10}
                : {
                    flexDirection: 'row',
                    padding: 10,
                    backgroundColor: '#fff',
                    marginBottom: 20,
                    borderRadius: 10,
                    elevation: 3,
                  }
            }>
            <Image
              source={item.image}
              style={
                isGridView
                  ? {width: '100%', height: 230, borderRadius: 10}
                  : {width: 100, height: 100, borderRadius: 10}
              }
            />
            <View style={{paddingLeft: isGridView ? 0 : 10}}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {item.title}
              </Text>
              <Text style={{fontSize: 14, color: '#555'}}>{item.brand}</Text>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                ${item.price.toFixed(2)}
              </Text>
              <TouchableOpacity>
                <Image
                  source={require('../../images/rating.png')}
                  style={{width: 150, height: 20}}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={{}}
      />
    </View>
  );
};

export default Women;
