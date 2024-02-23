import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {TextInput, Button, Title, Snackbar} from 'react-native-paper';
import {createApartment} from '../../hooks/apartments';
import styles from './AddApartment.styles';

const AddApartment = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [address, setAddress] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const handleAddApartment = () => {
    createApartment({
      title,
      description,
      img,
      price,
      size,
      address,
    });

    setSnackbarVisible(true);

    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    }, 1000);
  };

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>Add Apartment</Title>

      <TextInput
        label="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TextInput
        label="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        style={styles.input}
      />

      <TextInput
        label="Image URL"
        value={img}
        onChangeText={setImg}
        style={styles.input}
      />

      <TextInput
        label="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        label="Size (sq ft)"
        value={size}
        onChangeText={setSize}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        label="Address"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />

      <Button
        mode="contained"
        onPress={handleAddApartment}
        style={styles.button}>
        Add Apartment
      </Button>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        action={{
          label: 'Dismiss',
          onPress: () => setSnackbarVisible(false),
        }}>
        Apartment added successfully!
      </Snackbar>
    </ScrollView>
  );
};

export default AddApartment;
