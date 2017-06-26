import { renderComponent, expect } from "../test_helper";
import App from "../../src/components/app";

// Use "describe" to group together similar tests
describe("App", () => {
    let appComponent;

    beforeEach(() => {
        // Create an instane of App
        appComponent = renderComponent(App);
    });

    // Use "it" to test single attribute of a target
    it("shows a comment box", () => {
        // Use "expect" to make an "assertion" about a target
        expect(appComponent.find(".comment-box")).to.exist;
    });
    
    it("shows a comment list", () => {
        expect(appComponent.find(".comment-list")).to.exist;
    });
});
