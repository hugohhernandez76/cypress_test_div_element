import homePage from "../../support/pageObjects/mainPage";

require("cypress-xpath");

describe("QA Automation test", () => {
  const mainPage = new homePage();
  it("Loading main page", () => {
    mainPage.urlPage();
  });
  it("Typing in the text field", () => {
    cy.get("#text-input").should("be.visible").type("name");
    cy.xpath("//button[@type]").click();
  });

  it("Asserting note was created", () => {
    cy.xpath("//div[@class='note-container']").should("be.visible");
  });

  it("Deleting Note", () => {
    cy.xpath("//button[contains(.,'Delete')]").click();
  });
});
