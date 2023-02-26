describe('template spec', () => {
    const data = require('../fixtures/filmes.json')

    beforeEach(() => {
        cy.visit('https://lojafake.vanilton.net/#/drag-drop')
        cy.get('div').contains('Filmes').click()
    })

    it.only('Selecionar filmes vistos', () => {
        for (var i in data) {
            cy.clock()
            cy.contains(data[i].titulo).as('filme')
            cy.dragAndDrop('@filme', '#cdk-drop-list-2')
            cy.get('#cdk-drop-list-2').should('contain.text', data[i].titulo)
            cy.tick((500))
        }
        cy.get('#cdk-drop-list-2').children().should('have.length', '3')
        cy.contains('Filmes Vistos - 3').should('be.visible')
    })
})
