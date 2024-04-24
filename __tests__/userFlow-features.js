import { render } from "@testing-library/react-native";
import actions from "./actions/index";
import App from "../App";

export const userFlowSteps = ({ given, when, then, and }) => {
    given("I start the shopping journey", async () => {
        render(
            <App />
        );
        await actions.checkPage("home");
    });

    when(/^I press on the (.*?) button$/, async (buttonName) => {
        await actions.buttonPress(buttonName);
    });

    then(/^I should navigate to the (.*?) screen$/, async (screenName) => {
        await actions.checkPage(screenName);
    });

    when(/^I select (.*?) as a beginner guitar player$/, async (buttonName) => {
        await actions.buttonPress(buttonName);
    });

}