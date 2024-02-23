import * as React from 'react';
import {fetchSingleApartment} from '../../hooks/apartments';
import {FlatList} from 'react-native';
import AwesomeCard from '../../components/ApartmentCard';
import {useState, useEffect} from 'react';
import styles from './DetailsPage.styles';
import {View, Image, Text} from 'react-native';

const ApartmentScreen = ({navigation, route}) => {
  const {apartmentId} = route.params;
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    fetchSingleApartment(apartmentId)
      .then(data => {
        setApartment(data);
      })
      .catch(error => {
        console.error('Error in useEffect:', error);
      });
  }, [apartmentId]);

  if (!apartment) {
    return null; // Loading state or error handling can be added
  }

  const {title, description, img, price, size, address} = apartment;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://fastly.picsum.photos/id/501/200/300.jpg?hmac=fk5fWXapclFoDmPlQjOTEHRG3uPBJuPmB_5HeJsEsfY',
        }}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>Price: ${price}</Text>
        <Text style={styles.size}>Size: {size} sq ft</Text>
        <Text style={styles.address}>Address: {address}</Text>
      </View>
    </View>
  );
};

export default ApartmentScreen;
