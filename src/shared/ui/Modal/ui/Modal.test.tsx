import { fireEvent, render, screen } from "@testing-library/react";
import { Modal } from "./Modal";
import { type ReactElement } from "react";

const CORRECT_OVERLAY_CLASS = "Overlay";
const CORRECT_MODAL_CLASS = "Modal";

describe("Testing the correct render", () => {
    let modal: ReactElement | null = null;

    beforeAll(() => {
        modal = (
            <Modal noPortal isOpen onClose={() => {}}>
                Its a modal
            </Modal>
        );
    });

    test("Correct render", () => {
        render(modal as ReactElement);
        const overlayElement = screen.getByTestId("overlay");
        const modalElement = screen.getByTestId("modal");

        expect(overlayElement).toBeInTheDocument();
        expect(modalElement).toBeInTheDocument();
    });

    test("Correct overlay class with state no open", () => {
        render(
            <Modal noPortal isOpen={false} onClose={() => {}}>
                Its a modal
            </Modal>
        );
        const overlayElement = screen.getByTestId("overlay");

        expect(overlayElement).toHaveClass(CORRECT_OVERLAY_CLASS);
    });

    test("Correct overlay class with state no open", () => {
        render(modal as ReactElement);
        const overlayElement = screen.getByTestId("overlay");

        expect(overlayElement).toHaveClass(CORRECT_OVERLAY_CLASS);
        expect(overlayElement).toHaveClass("isOpen");
    });

    test("Correct modal children", () => {
        render(modal as ReactElement);
        const modalElement = screen.getByTestId("modal");

        expect(modalElement).toHaveTextContent("Its a modal");
    });

    test("Correct modal class", () => {
        render(modal as ReactElement);
        const modalElement = screen.getByTestId("modal");

        expect(modalElement).toHaveClass(CORRECT_MODAL_CLASS);
    });
});

describe("Testing the handlers", () => {
    const onClose = jest.fn(() => {});
    let modal: ReactElement | null = null;

    beforeAll(() => {
        modal = (
            <Modal noPortal isOpen onClose={onClose}>
                Its a modal
            </Modal>
        );
    });

    test("Overlay click", () => {
        render(modal as ReactElement);
        const overlay = screen.getByTestId("overlay");
        fireEvent.click(overlay);

        expect(onClose).toBeCalledTimes(1);
    });

    test("Overlay escape click", () => {
        render(modal as ReactElement);
        fireEvent.keyDown(window, {
            key: "Escape",
            code: "Escape",
            keyCode: 27,
            charCode: 27,
        });

        expect(onClose).toBeCalledTimes(1);
    });
});
