import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { ScrollView, Linking } from "react-native";
import { styles } from "./styles";

type BudgetL1Component = {
    navigation: any
};

const LeftContent = props => <Avatar.Icon {...props} icon="guitar-pick" />

const BudgetL1Component = ({ navigation }: BudgetL1Component) => (
    <ScrollView testID="page-name:beginner-guitar">
        <Card style={styles.container}>
            <Card.Title title="" subtitle="What a nice playable instrument" left={LeftContent} />
            <Card.Content style={styles.mb}>
                <Text variant="titleLarge">This is a perfect guitar for a begginer:</Text>
                <Text style={styles.linkColor} variant="titleLarge" onPress={() => Linking.openURL("https://www.thomann.de/gb/squier_sonic_strat_ht_torino_red.htm")}>Squier Sonic Strat</Text>
            </Card.Content>
            <Card.Cover style={styles.ml} source={{ uri: "./assets/u1.jpeg" }} />
            <Text style={styles.ml} variant="bodyMedium">Next step</Text>
            <Card.Actions>
                <Button mode="contained" onPress={() => navigation.navigate("OrderConfirmation", {})} accessibilityLabel="checkout">Checkout</Button>
            </Card.Actions>
            <Card.Actions>
                <Button mode="outlined" onPress={() => navigation.goBack()}>Go back</Button>
            </Card.Actions>
        </Card>
    </ScrollView>
);

export default BudgetL1Component;