import { screen, fireEvent } from "@testing-library/react-native";


export default {
   checkPage: (pageName) => {
        let pageNameElement;
      
        try {
            pageNameElement = screen.getByTestId(/^page-name:/)
        } catch {
          throw new Error(
            "Landed on unrecognised page."
          );
        }

        const currentPageName = pageNameElement.props?.testID
        expect(
          `page === ${currentPageName.substring(10, currentPageName.length)}`
        ).toEqual(`page === ${pageName}`);
    },

    buttonPress: async (buttonName) => {
        await fireEvent.press(screen.getByLabelText(buttonName));
    }
}