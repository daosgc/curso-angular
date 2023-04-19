describe('Store', () => {
  beforeEach(() => {
    cy.visit('/store')
    cy.intercept('GET', 'https://fakestoreapi.com/products?limit=5', { fixture: 'example.json'});
  })

  it('got to view and check the products', () => {
    cy.contains('Mi tienda')
  })
})
