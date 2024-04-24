import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { ScrollView } from "react-native";
import { styles } from "./styles";

type OrderConfirmationComponent = {
    navigation: any;
};

const LeftContent = props => <Avatar.Icon {...props} icon="guitar-pick" />

const OrderConfirmationComponent = ({ navigation }: OrderConfirmationComponent) => (
    <ScrollView testID="page-name:order-confirmation">
        <Card style={styles.container}>
            <Card.Title title="" subtitle="Dream Guitars" left={LeftContent} />
            <Card.Content style={styles.mb}>
                <Text variant="titleLarge">Enjoy your new axe!</Text>
            </Card.Content>
            <Card.Cover style={styles.ml} source={{ uri: "./assets/o1.jpeg" }} />
            <Text style={styles.ml} variant="bodyMedium">Thank you for shopping with us</Text>
            <Card.Actions>
                <Button onPress={() => navigation.navigate("Home", {})}>Pick a new one</Button>
            </Card.Actions>
        </Card>
    </ScrollView>
);

export default OrderConfirmationComponent;