# Resumo do projeto
Testes drag and drop utilizando Cypress.

app externo utilizado
- [LojaFake](https://lojafake.vanilton.net/#/drag-drop)


## Instalação

```bash
npm i 
```
## Executando
headless
```bash
npm test
```
Interativo
```bash
npm open
```


## 🔨 Funcionalidades do projeto

- **Drag and drop Angular**

Instalar [cypress-real-events](https://stackoverflow.com/questions/71968174/cypress-drag-drop-angular-cdk)

```bash
npm i cypress-real-events -D
```
Adicionar em support/e2e.js
```bash
import "cypress-real-events"
```
Adicionar em support/commands.js

```bash
Cypress.Commands.add('dragAndDrop', (subjectSelector, targetSelector) => {
    cy.get(subjectSelector)
        .realMouseDown({ button: 'left', position: 'center' })
        .realMouseMove(0, 10, { position: 'center' });
    cy.get(targetSelector).realMouseMove(0, 0, { position: 'center' }).realMouseUp();
});
```

Como utilizar 
```bash
cy.dragAndDrop(subjectSelector, targetSelector);
```

- **Drag and drop html (puro)**
```bash
npm i @4tw/cypress-drag-drop -D
```

Adicionar em support/e2e.js
```bash
import "@4tw/cypress-drag-drop"
```

Como utilizar 
```bash
cy.get('.sourceitem').drag('.targetitem')
```
[Repositório](https://github.com/4teamwork/cypress-drag-drop)
