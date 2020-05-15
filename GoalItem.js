import React from 'react';
import { View, Text}

const GoalItem = props => {
    return  <View style={style=styles.listItem}>
    <Text>{itemData.item.value}</Text>
    </View>
};

export default GoalItem; 