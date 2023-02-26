describe('Drag and drop', () => {
    const data = require('../fixtures/tarefas.json')

    beforeEach(() => {
        cy.visit('./index.html')
    })

    it('Movendo cards', () => {
        for (var i in data){
            cy.get(data[i].seletor).drag('#feito')
            cy.get('#feito')
                .children()
                .should('contain.text', data[i].descricao)
        }
        cy.get('#feito').children().should('have.length', '3')
    })
})