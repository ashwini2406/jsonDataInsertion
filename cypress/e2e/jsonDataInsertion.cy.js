describe('insert json data', () => {

  beforeEach(() => {
    cy.fixture('data.json').as("data");
  });

  it('should insert json data in html table', function () {

    const jsonString = JSON.stringify(this.data);
    cy.visit('https://testpages.herokuapp.com/styled/tag/dynamic-table.html');
    cy.get("summary").click();
    cy.get("#jsondata").clear().type(jsonString, { parseSpecialCharSequences: false }).should('have.value', jsonString, { parseSpecialCharSequences: false });
    cy.get("#refreshtable").click();
  })
})