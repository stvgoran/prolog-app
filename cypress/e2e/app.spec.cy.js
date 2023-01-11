describe('Home page', () => {
  it('Test h1', () => {
    cy.visit('http://localhost:3000');
    cy.get('body').contains('Get started by editing pages/index.tsx');
  });
});
