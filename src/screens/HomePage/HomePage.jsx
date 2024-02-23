import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {fetchAllApartments} from '../../hooks/apartments';
import {FlatList} from 'react-native';
import ApartmentCard from '../../components/ApartmentCard';
import {useState, useEffect} from 'react';
import styles from './HomePage.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FAB, Appbar} from 'react-native-paper';

const HomeScreen = ({navigation}) => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetchAllApartments()
      .then(data => {
        setApartments(data);
      })
      .catch(error => {
        console.error('Error in useEffect:', error);
      });
  }, []);

  const renderCard = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ApartmentDetails', {apartmentId: item._id});
      }}>
      <ApartmentCard
        title={item.title}
        description={item.description}
        img={item.img}
        price={item.price}
        size={item.size}
        address={item.address}
      />
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <Appbar.Header>
      <Appbar.Content title="Home" />
      <Appbar.Action
        icon={({color, size}) => (
          <Icon
            name="plus"
            color={color}
            size={size}
            onPress={() => {
              navigation.navigate('AddApartment');
            }}
          />
        )}
      />
    </Appbar.Header>
  );

  return (
    <>
      {/* <FAB
        style={styles.fab}
        icon={() => <Icon name="plus" size={30} color="white" />}
        onPress={() => navigation.navigate('AddApartment')}
      /> */}
      {renderHeader()}
      <FlatList
        data={apartments}
        keyExtractor={item => item._id}
        renderItem={renderCard}
      />
    </>
  );
};

export default HomeScreen;
