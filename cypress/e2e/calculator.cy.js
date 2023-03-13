describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it("should have working number buttons", () => {
    cy.get("#number2").click();
    cy.get(".display").should("contain", "2")
  })

  it("should have working operator buttons", () => {
    cy.get("#number1").click();
    cy.get("#operator_add").click();
    cy.get("#number3").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "4")
  })

  it("should be able to chain multiple operations", () => {
    cy.get("#number8").click();
    cy.get("#operator-divide").click();
    cy.get("#number4").click();
    cy.get("#operator-multiply").click();
    cy.get("#number5").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "10")
  })

  // 4. Is the output as expected for a range of numbers (for example, positive,
// negative, decimals and very large numbers)?
  it("should be able to calculate with a negative number", () => {
    cy.get("#number7").click();
    cy.get("#number0").click();
    cy.get("#operator-subtract").click();
    cy.get("#number9").click();
    cy.get("#number0").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "-20")
  })

  it("should be able to output a decimal number", () => {
    cy.get("#number6").click();
    cy.get("#operator-divide").click();
    cy.get("#number1").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "0.5")
  })

  it("should be able to calculate with a decimal number", () => {
    cy.get("#number3").click();
    cy.get("#number0").click();
    cy.get("#operator-multiply").click();
    cy.get("#number0").click();
    cy.get("#decimal").click();
    cy.get("#number5").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "15")
  })

  it("should be able to output a large number", () => {
    cy.get("#number1").click();
    cy.get("#operator-divide").click();
    cy.get("#number3").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "0.3333333333")
  })

  it("should be able to divide by zero", () => {
    cy.get("#number7").click();
    cy.get("#operator-divide").click();
    cy.get("#number0").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "Not a number")
  })

})

