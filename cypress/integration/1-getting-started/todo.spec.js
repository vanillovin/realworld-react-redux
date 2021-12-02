const 할일을_추가하기 = '할일을 추가하기';
const 할일을_완료하기 = '할일을 완료하기';

describe('todoMVC 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('처음에는 2개의 기본 Todo가 들어 있다.', () => {

    cy.get('.todo-list li').should('have.length', 2)

    cy.get('.todo-list li').first().should('have.text', 할일을_추가하기)
    cy.get('.todo-list li').last().should('have.text', 할일을_완료하기)

    cy.get('.todo-count').should('have.text', '2 items left')
  })

  it('할일을 새로 추가할 수 있다.', () => {
    const newItem = '전화하기'

    cy.get('input.new-todo').type(`${newItem}{enter}`)

    cy.get('.todo-list li').should('have.length', 3)
      .last().should('have.text', newItem)

    cy.get('.todo-count').should('have.text', '3 items left')
  })

  it('할일을 삭제할 수 있다', ()=>{
    cy.get('.todo-list li')
      .first().trigger('mouseover')

    cy.get('.destroy')
      .first().invoke('show').click();

    cy.get('.todo-list li').should('have.length', 1)
      .last().should('have.text', 할일을_완료하기)

    cy.get('.todo-count').should('have.text', '1 item left')
  })

  it('할일을 수정할 수 있다', () => {
    cy.contains(할일을_추가하기).dblclick()

    cy.get('input.edit').first().type('{backspace}{backspace}{enter}')
    
    cy.get('.todo-list li').first().should('have.text', '할일을 추가')
  })

  it('할일을 완료하고, 취소할 수 있다', () => {
    cy.contains(할일을_추가하기)
      .parent().find('input[type=checkbox]').check()

    cy.contains(할일을_추가하기)
      .parents('li').should('have.class', 'completed')
    
    cy.contains(할일을_추가하기)
      .parent().find('input[type=checkbox]').uncheck()

    cy.contains(할일을_추가하기)
      .parents('li').should('not.have.class', 'completed')
  })

  it('모든 할일을 완료하고, 모두 취소할 수 있다', () => {
    cy.get('label[for="toggle-all"]').click()

    cy.get('.todo-list li').should('have.class', 'completed')

    cy.get('label[for="toggle-all"]').click()

    cy.get('.todo-list li').should('not.have.class', 'completed')
  })

  context('이미 완료된 할일이 하나 있으면', () => {
    beforeEach(() => {
      cy.contains(할일을_추가하기)
        .parent().find('input[type=checkbox]').check()
    })


    it('모두 완료 버튼을 누르면, 모든 할일을 완료하게 된다', () => {
      cy.get('label[for="toggle-all"]').click()

      cy.get('.todo-list li').should('have.class', 'completed')

      // 모든 할일이 취소되는 게 아니라!
    })

    it('완료되지 않은 할일만 filter해서 볼 수 있다', () => {
      cy.contains('active').click()

      cy.get('.todo-list li').should('have.length', 1)
        .first().should('have.text', 할일을_완료하기)

      cy.contains(할일을_추가하기).should('not.exist')
    })

    it('완료한 할일만 filter해서 볼 수 있다', () => {
      cy.contains('completed').click()

      cy.get('.todo-list li').should('have.length', 1)
        .first().should('have.text', 할일을_추가하기)

      cy.contains(할일을_완료하기).should('not.exist')
    })

    it('완료한 할일만 모두 삭제할 수 있다', () => {
      cy.contains('Clear completed').click()

      cy.get('.todo-list li').should('have.length', 1)
        .should('not.have.text', 할일을_추가하기)
    })
  })
})