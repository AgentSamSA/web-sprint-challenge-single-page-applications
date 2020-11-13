describe("Users app", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza");
    });

    const nameInput = () => cy.get("input[name='name']");
    const toppingsInput = () => cy.get("input[type='checkbox']");

    it("can make sure tests work", () => {
        expect(1 + 1).to.equal(2);
        expect(2 * 3).not.to.equal(2);
    });

    it("should make sure DOM elements exist", () => {
        nameInput().should("exist");
        toppingsInput().should("exist");
    });

    it("can type a name into input", () => {
        nameInput().should("have.value", "");
        nameInput().type("Random name");
        nameInput().should("have.value", "Random name");
    });

    it("can select multiple toppings", () => {
        toppingsInput().should("have.value", "on");
        toppingsInput().first().check();
        toppingsInput().last().check();
        toppingsInput().should("have.value", "on")
    });
});