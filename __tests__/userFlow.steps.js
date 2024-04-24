import { autoBindSteps, loadFeature } from "jest-cucumber";
import { userFlowSteps } from "./userFlow-features";
import 'react-native-get-random-values'

const features = loadFeature("__tests__/userFlow.feature");

autoBindSteps(features, [userFlowSteps]);