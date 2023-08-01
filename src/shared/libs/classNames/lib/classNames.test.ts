import { classNames } from "./classNames";

describe("ClassNames", () => {
    test("Only cls param", () => {
        expect(classNames("class")).toBe("class");
    });

    test("Cls param and addition classes", () => {
        expect(classNames("class", ["additional", "test"])).toBe(
            "class additional test"
        );
    });

    test("Cls param, addition classes and mods", () => {
        expect(
            classNames("class", ["additional", "test"], {
                hovered: true,
                scollable: false,
            })
        ).toBe("class additional test hovered");
    });

    test("Cls param and mods", () => {
        expect(
            classNames("class", [], { hovered: true, scrollable: false })
        ).toBe("class hovered");
    });
});
