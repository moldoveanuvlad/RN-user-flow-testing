import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { ScrollView } from "react-native";
import { styles } from "./styles";

type LotteryComponent = {
    navigation: any
};

const LeftContent = props => <Avatar.Icon {...props} icon="guitar-pick" />

const LotteryComponent = ({ navigation }: LotteryComponent) => (
    <ScrollView testID="page-name:lottery">
        <Card style={styles.container}>
            <Card.Title title="" subtitle="Question 2" left={LeftContent} />
            <Card.Content style={styles.mb}>
                <Text variant="titleLarge">Did you won the lottery?</Text>
            </Card.Content>
            <Card.Cover style={styles.ml} source={{ uri: "./assets/l2.avif" }} />
            <Text style={styles.ml} variant="bodyMedium">Choose an option</Text>
            <Card.Actions>
                <Button mode="contained" onPress={() => navigation.navigate("BudgetL4", {})} accessibilityLabel="yes">Yes</Button>
                <Button mode="contained" onPress={() => navigation.navigate("Budget", {})} accessibilityLabel="no">No</Button>
                <Button mode="outlined" onPress={() => navigation.goBack()}>Go Back</Button>
            </Card.Actions>
        </Card>
    </ScrollView>
);

export default LotteryComponent;