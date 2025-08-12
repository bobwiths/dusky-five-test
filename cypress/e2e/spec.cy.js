import randomData from '../fixtures/randomData.json';
import KanbanBoard from '../page/kanbanBoard';

const kanbanBoard = new KanbanBoard()

describe('Testes Dusky Five', () => {
  it('Criar nova tarefa', () => {
    let task = randomData.newTask
    cy.visit("https://kanban-dusky-five.vercel.app/")
    kanbanBoard.addNewTask(task.taskName)
  })
  it('Criar nova lista', () => {
    let board = randomData.newBoard
    cy.visit("https://kanban-dusky-five.vercel.app/")
    kanbanBoard.addNewBoard(board.boardName)
  })
  it('Deletar nova lista', () => {
    let board = randomData.newBoard
    cy.visit("https://kanban-dusky-five.vercel.app/")
    kanbanBoard.deleteNewBoard(board.boardName)
  })
})