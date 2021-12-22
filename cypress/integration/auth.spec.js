
describe('authentication', () => {
    describe('회원가입', () => {
        it('홈페이지에서 시작', ()=>{
            cy.visit('http://localhost:3000/')
        })  
        it('Sign up 링크를 클릭하면, 회원가입 페이지로 이동', () => {
            // Sign up 링크를 클릭
            cy.contains('Sign up').click() // 문자열이 포함된 것을 찾아라
        })
        it('가입할 회원정보를 입력하고 Sign up을 누르면, 홈페이지로 이동한다.', () => {
            cy.get('input[name="username"]').type("apopo")
            cy.get('input[name="email"]').type("apopo@gmail.com")
            cy.get('input[name="password"]').type('12345678')

            cy.get('button[type="submit"]').contains('Sign up').click()

            cy.location().should((loc) => {
                expect(loc.hash).to.eq('#/') // 메인 화면으로 돌아가기
            })
        })

        it('가입 후에는 로그인이 되어 있고, 글쓰기, 세팅, 사용자 이름이 보인다', ()=>{
            cy.get('a.nav-link').contains('Sign in').should('not.exist')
            cy.get('a.nav-link').contains('Sign up').should('not.exist')
            
            cy.get('a.nav-link').contains('New Article').should('exist')
            cy.get('a.nav-link').contains('Settings').should('exist')
            cy.get('a.nav-link').contains('apopo').should('exist')
        })
    })
})