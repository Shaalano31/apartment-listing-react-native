import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ApartmentCard = ({title, description, img, price, size, address}) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{uri: img}} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text>{description}</Text>
        <Text>Price: ${price}</Text>
        <Text>Size: {size}</Text>
        <Text>Address: {address}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    margin: 10,
    padding: 10,
    flexDirection: 'row',
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default ApartmentCard;
