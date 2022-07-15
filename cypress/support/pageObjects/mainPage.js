class homePage {
  urlPage() {
    cy.visit("http://localhost:3000/");
    cy.title().should("eq", "React App");
    cy.wait(2000);
  } //final
}
export default homePage;
