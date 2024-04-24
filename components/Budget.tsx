import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { ScrollView } from "react-native";
import { styles } from "./styles";

type BudgetComponent = {
    navigation: any
};

const LeftContent = props => <Avatar.Icon {...props} icon="guitar-pick" />

const BudgetComponent = ({ navigation }: BudgetComponent) => (
    <ScrollView>
        <Card style={styles.container}>
            <Card.Title title="" subtitle="Question 3" left={LeftContent} />
            <Card.Content style={styles.mb}>
                <Text variant="titleLarge">What"s your budget?</Text>
            </Card.Content>
            <Card.Cover style={styles.ml} source={{ uri: "./assets/m1.avif" }} />
            <Text style={styles.ml} variant="bodyMedium">Choose an option</Text>
            <Card.Actions>
                <Button mode="contained" onPress={() => navigation.navigate("BudgetL1", {})}>Under 200 euros</Button>
                <Button mode="contained" onPress={() => navigation.navigate("BudgetL2", {})}>200 - 500 euros</Button>
                <Button mode="contained" onPress={() => navigation.navigate("BudgetL3", {})}>500 - 1000 euros</Button>
                <Button mode="contained" onPress={() => navigation.navigate("BudgetL4", {})}>Over 1000 euros</Button>
            </Card.Actions>
            <Card.Actions>
                <Button mode="outlined" onPress={() => navigation.goBack()}>Go back</Button>
            </Card.Actions>
        </Card>
    </ScrollView>
);

export default BudgetComponent;