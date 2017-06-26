import jsdom from "jsdom";
import jquery from "jquery";
import TestUtils from "react-addons-test-utils";
import ReactDOM from "react-dom";
import chai, { expect } from "chai";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../src/reducers";
import chaiJquery from "chai-jquery";

// 1. Set up testing environment to run like a browser in the command line
global.document = jsdom.jsdom("<!doctype html><html><body></body></html>");
global.window = global.document.defaultView;
const $ = jquery(global.window);

// 2. build "renderComponent" helper that should render a given react ComponentClass
function renderComponent(ComponentClass, props, state) {
    const componentInstance = TestUtils.renderIntoDocument(
        <Provider store={createStore(reducers, state)}>
            <ComponentClass { ...props } />
        </Provider>
    );

    return $(ReactDOM.findDOMNode(componentInstance)); // produces HTML
}

// 3. Build helper for simulating events
$.fn.simulate = function(eventName, value) { // Adds "simulate" function to every jQuery instance
    // if (value) {
    //     this.val(value);
    // }
    TestUtils.Simulate[eventName](this[0], (value ? { target: { value } } : undefined));
    return this;
}

// 4. Set up chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };