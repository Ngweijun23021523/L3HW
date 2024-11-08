import { StyleSheet, Text, View, Alert, Button, Image, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

const MyApp = () => {
    const [OwlType, setOwlType] = useState("");
    const [LeoType, setLeoType] = useState("");
    const [CrocoType, setCrocoType] = useState("");

    const checkAnswers = () => {
        const CorrectLeo = 'Leopard';
        const CorrectOwl = 'Owl';
        const CorrectCroco = 'Crocodile';
        let correct = 0;

        if (LeoType === CorrectLeo) {
            correct += 1;
        }
        if (OwlType === CorrectOwl) {
            correct += 1;
        }
        if (CrocoType === CorrectCroco) {
            correct += 1;
        }

        if (correct === 1) {
            Alert.alert('Result', 'You have 1 correct answer');
        } else if (correct === 2) {
            Alert.alert('Result', 'You have 2 correct answers');
        } else if (correct === 3) {
            Alert.alert('Result', 'You have 3 correct answers');
        } else {
            Alert.alert('Result', 'You have no correct answers');
        }
    };

    const styles = StyleSheet.create({
        Title: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#333',
            paddingTop: 40,
            textAlign: 'center',
            fontStyle: 'italic',
            marginTop:40,
            backgroundColor:'green',
            borderWidth:5,


        },
        buttonContainer: {
            position: 'absolute',
            bottom: 0,
            width: '100%',
            padding: 10,
            backgroundColor: '#fff',
        },
        Text:{
            fontSize: 24,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            fontStyle: 'italic',
            backgroundColor:'#964B00',
            borderWidth:5,

        },
        image:{
            borderWidth:5,
            width:415 ,
            height:415 ,
        }
    });

    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.Title}>
                <Icon name="paw" size={24} /> Animal Quiz
            </Text>
            <ScrollView contentContainerStyle={{  paddingBottom: 100 ,borderWidth:5}}>
                <Text style={styles.Text}>What animal is this?</Text>
                <Image source={require('./img/crocodile.jpg')} style={styles.image} />

                <RNPickerSelect
                    onValueChange={(value) => setCrocoType(value)}
                    items={[
                        { label: 'Alligator', value: 'Alligator' },
                        { label: 'Crocodile', value: 'Crocodile' },
                        { label: 'Lizard', value: 'Lizard' },
                    ]}
                />

                <Text style={styles.Text}>What animal is this?</Text>
                <Image source={require('./img/leopard.jpg')} style={ styles.image} />
                <RNPickerSelect
                    onValueChange={(value) => setLeoType(value)}
                    items={[
                        { label: 'lion', value: 'lion' },
                        { label: 'tiger', value: 'tiger' },
                        { label: 'Leopard', value: 'Leopard' },
                    ]}
                />

                <Text style={styles.Text}>What animal is this?</Text>
                <Image source={require('./img/owl.jpg')} style={styles.image} />
                <RNPickerSelect
                    onValueChange={(value) => setOwlType(value)}
                    items={[
                        { label: 'Owl', value: 'Owl' },
                        { label: 'eagle', value: 'eagle' },
                        { label: 'crow', value: 'crow' },
                    ]}
                />
            </ScrollView>
            <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={checkAnswers} />
            </View>
        </View>
    );
};

export default MyApp;
