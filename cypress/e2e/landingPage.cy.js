describe("Landing page test", () => {
  it("Visits Landing Page", () => {
    cy.visit("http://localhost:3000");
  });
  const trimesters = [1, 2, 3];
  const topics = ["Exercise", "Well being", "Recipes"];
  it(`Hovers trimester 1 and displays topics`, () => {
    cy.contains(`Trimester 1`).trigger("hover");
    cy.contains("Exercise");
    cy.contains("Well being");
    cy.contains("Recipes");
  });
  topics.forEach((topic) => {
    it(`Trimester 1 - Goes to ${topic} page`, () => {
      cy.contains(`Trimester 1`).click();
      cy.contains(`${topic}`).click();
    });
  });
});
