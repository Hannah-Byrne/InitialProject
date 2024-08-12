import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const DatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Select a Date</Text>
            <Calendar
                onDayPress={onDayPress}
                markedDates={selectedDate ? { [selectedDate]: { selected: true } } : {}}
            />
            {selectedDate && (
                <Text style={styles.selectedDate}>Selected Date: {selectedDate}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
    },
    header: {
        fontSize: 18,
        marginBottom: 20,
    },
    selectedDate: {
        marginTop: 20,
        fontSize: 16,
    },
});


export default DatePicker;