describe('Lista de tareas', () => {
  beforeEach(() => {
    cy.visit('/tasks/list')
  });

  it('should go to view', () => {
    cy.get('app-list-tareas').should('be.visible');
    cy.contains('Aun no tienes tareas, por favor agregar una.');
  });

  it('should add a new task', () => {
    cy.get('[data-cy="taskItem"]').should('have.length', 0);
    cy.get('[data-cy="taskInput"]').type('Nueva tarea desde cypress');
    cy.get('button[data-cy="taskButton"]').click();
    cy.get('[data-cy="taskItem"]').should('have.length', 1);

    cy.get('[data-cy="taskInput"]').type('Otra tarea desde cypress');
    cy.get('button[data-cy="taskButton"]').click();
    cy.get('[data-cy="taskItem"]').should('have.length', 2);
  });

  it('should complete an existing task', () => {
    cy.get('[data-cy="taskItem"]').should('have.length', 0);

    cy.get('[data-cy="taskInput"]').type('Nueva tarea desde cypress');
    cy.get('button[data-cy="taskButton"]').click();
    cy.get('[data-cy="taskItem"]').should('have.length', 1);

    cy.get('button[data-cy="taskCompleteButton"]').last().click();
    cy.get('[data-cy="taskItem"]').should('have.length', 0);
  });
})
