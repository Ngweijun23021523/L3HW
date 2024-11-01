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
        },
        buttonContainer: {
            position: 'absolute',
            bottom: 0,
            width: '100%',
            padding: 10,
            backgroundColor: '#fff',
        }
    });

    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.Title}>
                <Icon name="paw" size={24} /> Animal Quiz
            </Text>
            <ScrollView contentContainerStyle={{ padding: 20, paddingTop: 50, paddingBottom: 100 }}>
                <Text>What animal is this?</Text>
                <Image source={require('./img/crocodile.jpg')} style={{ width: 400, height: 400 }} />
                <RNPickerSelect
                    onValueChange={(value) => setCrocoType(value)}
                    items={[
                        { label: 'Alligator', value: 'Alligator' },
                        { label: 'Crocodile', value: 'Crocodile' },
                        { label: 'Lizard', value: 'Lizard' },
                    ]}
                />

                <Text>What animal is this?</Text>
                <Image source={require('./img/leopard.jpg')} style={{ width: 400, height: 400 }} />
                <RNPickerSelect
                    onValueChange={(value) => setLeoType(value)}
                    items={[
                        { label: 'lion', value: 'lion' },
                        { label: 'tiger', value: 'tiger' },
                        { label: 'Leopard', value: 'Leopard' },
                    ]}
                />

                <Text>What animal is this?</Text>
                <Image source={require('./img/owl.jpg')} style={{ width: 400, height: 400 }} />
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
