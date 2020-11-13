describe("Users app", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza");
    });

    const nameInput = () => cy.get("input[name='name']");
    const toppingsInput = () => cy.get("input[type='checkbox']");
    const submitButton = () => cy.get(".submitBtn");

    it("can make sure tests work", () => {
        expect(1 + 1).to.equal(2);
        expect(2 * 3).not.to.equal(2);
    });

    it("should make sure DOM elements exist", () => {
        nameInput().should("exist");
        toppingsInput().should("exist");
        submitButton().should("exist");
        cy.contains("Add to Order");
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

    it("can submit the order form", () => {
        submitButton().should("be.disabled");
        nameInput().type("Name");
        submitButton().should("be.disabled");
        cy.get("select").select("Medium").should("have.value", "Medium");
        submitButton().should("be.disabled");
        cy.get("input[type='radio']").check("red");
        submitButton().should("be.not.disabled");
        toppingsInput().first().check();
        submitButton().should("be.not.disabled");
        nameInput().clear();
        submitButton().should("be.disabled");
    });
});