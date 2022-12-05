describe("tests for home-page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/home-page");
  });
  it("has a nav component", () => {
    let navLinks = [
      "Home",
      "FAQ",
      "Search",
      "About Us",
      "Trimester 1",
      "Trimester 2",
      "Trimester 3",
    ];
    cy.get("nav")
      .should("have.length", 1)
      .should("contain", navLinks[0])
      .and("contain", navLinks[1])
      .and("contain", navLinks[2])
      .and("contain", navLinks[3])
      .and("contain", navLinks[4])
      .and("contain", navLinks[5]);
  });
  it("has a footer component", () => {
    let footerLinks = [
      "About us",
      "Contact us",
      "Glossary",
      "Developers",
      "Forum",
      "Disclaimer",
    ];
    cy.get("footer")
      .should("have.length", 1)
      .should("contain", footerLinks[0])
      .and("contain", footerLinks[1])
      .and("contain", footerLinks[2])
      .and("contain", footerLinks[3])
      .and("contain", footerLinks[4])
      .and("contain", footerLinks[5]);
  });
  it("has headings for exercise, healthy eating and wellbeing", () => {
    cy.contains("Healthy Eating");
    cy.contains("Exercise");
    cy.contains("Wellbeing");
  });
  it("has a clickable tab for trimester 3 that goes to the correct url and shows correct content", () => {
    cy.get("ul li").contains("Trimester 3").click();
    cy.url().should("include", "home-page?trimester=3");
    cy.contains("You are reaching the final stages of pregnancy");
  });
  it("has a clickable tab for trimester 2 that goes to the correct url and shows correct content", () => {
    cy.get("ul li").contains("Trimester 2").click();
    cy.url().should("include", "home-page?trimester=2");
    cy.contains("Continue to focus on food groups rather than calorie intake");
  });
  it("has a clickable tab for trimester 1 that goes to the correct url and shows correct content", () => {
    cy.get("ul li").contains("Trimester 1").click();
    cy.url().should("include", "home-page?trimester=1");
    cy.contains(
      "To keep yourself healthy during your pregnancy is to exercise"
    );
  });
});
