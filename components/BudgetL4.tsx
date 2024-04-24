import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { ScrollView, Linking } from "react-native";
import { styles } from "./styles";

type BudgetL4Component = {
    navigation: any
};

const LeftContent = props => <Avatar.Icon {...props} icon="guitar-pick" />

const BudgetL4Component = ({ navigation }: BudgetL4Component) => (
    <ScrollView testID="page-name:expert-guitar">
        <Card style={styles.container}>
            <Card.Title title="" subtitle="You're a rockstar!" left={LeftContent} />
            <Card.Content style={styles.mb}>
                <Text variant="titleLarge">This is the ultimate axe for a god level player!</Text>
                <Text style={styles.linkColor} variant="titleLarge" onPress={() => Linking.openURL("https://www.thomann.de/intl/gibson_lp_custom_54_black_beauty_vos.htm")}>Gibson Les Paul Custom</Text>
            </Card.Content>
            <Card.Cover style={styles.ml} source={{ uri: "./assets/e1.jpeg" }} />
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

export default BudgetL4Component;