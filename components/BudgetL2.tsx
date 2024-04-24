import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { ScrollView, Linking } from "react-native";
import { styles } from "./styles";

type BudgetL2Component = {
    navigation: any
};

const LeftContent = props => <Avatar.Icon {...props} icon="guitar-pick" />

const BudgetL2Component = ({ navigation }: BudgetL2Component) => (
    <ScrollView>
        <Card style={styles.container}>
            <Card.Title title="" subtitle="Wow...I thought this was more expensive" left={LeftContent} />
            <Card.Content style={styles.mb}>
                <Text variant="titleLarge">This is a very nice quality guitar</Text>
                <Text style={styles.linkColor} variant="titleLarge" onPress={() => Linking.openURL("https://www.thomann.de/intl/ibanez_s561_pmm.htm")}>Ibanez S561</Text>
            </Card.Content>
            <Card.Cover style={styles.ml} source={{ uri: "./assets/sq1.jpeg" }} />
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

export default BudgetL2Component;