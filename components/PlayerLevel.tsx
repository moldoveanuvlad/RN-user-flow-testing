import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { ScrollView } from "react-native";
import { styles } from "./styles";

type PlayerLevelComponent = {
    navigation: any;
};

const LeftContent = props => <Avatar.Icon {...props} icon="guitar-pick" />

const PlayerLevelComponent = ({ navigation }: PlayerLevelComponent) => (
    <ScrollView testID="page-name:player" >
        <Card style={styles.container}>
            <Card.Title title="" subtitle="Question 1" left={LeftContent} />
            <Card.Content style={styles.mb}>
                <Text variant="titleLarge">Are you just beggining to play the guitar?</Text>
            </Card.Content>
            <Card.Cover style={styles.ml} source={{ uri: "./assets/g1.jpeg" }} />
            <Text style={styles.ml} variant="bodyMedium">Choose an option</Text>
            <Card.Actions>
                <Button mode="contained" onPress={() => navigation.navigate("BudgetL1", {})} accessibilityLabel="yes">Yes</Button>
                <Button mode="contained" onPress={() => navigation.navigate("Lottery", {})} accessibilityLabel="no">No</Button>
                <Button mode="outlined" onPress={() => navigation.goBack()}>Go Back</Button>
            </Card.Actions>
        </Card>
    </ScrollView>
);

export default PlayerLevelComponent;