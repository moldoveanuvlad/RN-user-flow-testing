import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { ScrollView } from "react-native";
import { styles } from "./styles";

type HomeComponent = {
    navigation: any;
};

const LeftContent = props => <Avatar.Icon {...props} icon="guitar-pick" />

const HomeComponent = ({ navigation }: HomeComponent) => (
    <ScrollView testID="page-name:home">
        <Card style={styles.container}>
            <Card.Title title="" subtitle="Dream Guitars" left={LeftContent} />
            <Card.Content style={styles.mb}>
                <Text variant="titleLarge">Welcome to our guitar shop</Text>
            </Card.Content>
            <Card.Cover style={styles.ml} source={{ uri: "./assets/s1.jpeg" }} />
            <Text style={styles.ml} variant="bodyMedium">We"ll help you choose your dream guitar</Text>
            <Card.Actions>
                <Button onPress={() => navigation.navigate("PlayerLevel", {})} accessibilityLabel="start">Start</Button>
            </Card.Actions>
        </Card>
    </ScrollView>
);

export default HomeComponent;