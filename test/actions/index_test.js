import { expect } from "../test_helper";
import { SAVE_COMMENT } from "../../src/actions/types";
import { saveComment } from "../../src/actions";

describe("actions", () => {
    describe("saveComment", () => {
        it("has the coorect type", () => {
            const action = saveComment();
            expect(action.type).to.equal(SAVE_COMMENT);
        });

        it("has the coorect paeload", () => {
            const action = saveComment("New Comment");
            expect(action.payload).to.equal("New Comment");
        });
    });
});
