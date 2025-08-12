class KanbanBoard{
    selectorsList(){
        const selectors = {
            genericInput: ".custom-input",
            textField: "[type='text']",
            submitButton: "[type='submit']",
            genericHeaderParagraf: "header p",
            genericBoardTitle: ".board-header-title",
            boardTitle: ".header"
        }

        return selectors
    }

    addNewTask(taskName) {
        cy.get(this.selectorsList().genericInput).eq(1).click()
        cy.get(this.selectorsList().textField).type(taskName)
        cy.get(this.selectorsList().submitButton).click()
        cy.get(this.selectorsList().genericHeaderParagraf).eq(5).contains(taskName)
    }
    addNewBoard(boardName) {
        cy.get(this.selectorsList().genericInput).eq(3).click()
        cy.get(this.selectorsList().textField).type(boardName)
        cy.get(this.selectorsList().submitButton).click()
        cy.get(this.selectorsList().genericBoardTitle).eq(3).contains(boardName)
    }
    deleteNewBoard(boardName) {
        cy.get(this.selectorsList().genericInput).eq(3).click()
        cy.get(this.selectorsList().textField).type(boardName)
        cy.get(this.selectorsList().submitButton).click()
        cy.get(this.selectorsList().genericBoardTitle).eq(3).contains(boardName)
        cy.get("#" + boardName + "trash").click()
        cy.get(this.selectorsList().boardTitle).eq(3).should('not.exist')
    }
}

export default KanbanBoard