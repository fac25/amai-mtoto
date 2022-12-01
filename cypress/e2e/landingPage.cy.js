describe("Landing page test", () => {
  it("Visits Landing Page", () => {
    cy.visit("http://localhost:3000");
  });
  const trimesters = [1, 2, 3];
  const topics = ["Exercise", "Well being", "Recipes"];
  trimesters.map((num, i) => {
    it(`Hovers trimester ${num} and displays topics`, () => {
      cy.contains(`Trimester ${num}`).trigger("hover");
      cy.contains("Exercise");
      cy.contains("Well being");
      cy.contains("Recipes");
    });
    topics.forEach((topic) =>
      it(`Trimester ${num} - Goes to ${topic} page`, () => {
        cy.contains(`Trimester 2`).trigger("hover");
        cy.contains(`${topic}`);
      })
    );
  });
});
