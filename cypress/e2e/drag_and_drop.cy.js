describe('template spec', () => {

  beforeEach( () =>{
    cy.visit('./index.html')
  })

  it('mover card - todo para doing', () => {
    cy.contains("h3", "CARD 01")
        .drag('#doing')
    cy.get('#doing article')
        .should('have.length', '3')
  })

  it('mover card - todo para doing', () => {
    cy.get("h3").contains("CARD 02")
        .drag('#done')
    cy.get('#done article')
        .should('have.length', '2')
  })
})