import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { ScrollView, Linking } from "react-native";
import { styles } from "./styles";

type BudgetL3Component = {
    navigation: any
};

const LeftContent = props => <Avatar.Icon {...props} icon="guitar-pick" />

const BudgetL3Component = ({ navigation }: BudgetL3Component) => (
    <ScrollView>
        <Card style={styles.container}>
            <Card.Title title="" subtitle="Isn't this the best deal?" left={LeftContent} />
            <Card.Content style={styles.mb}>
                <Text variant="titleLarge">This is a professional guitar with an affordable price</Text>
                <Text style={styles.linkColor} variant="titleLarge" onPress={() => Linking.openURL("https://www.thomann.de/intl/fender_player_plus_strat_hss_blb.htm")}>Fender Player Plus</Text>
            </Card.Content>
            <Card.Cover style={styles.ml} source={{ uri: "./assets/l1.jpeg" }} />
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

export default BudgetL3Component;