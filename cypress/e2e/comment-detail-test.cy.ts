describe('Note app', function() {
  it('comment-detail', function() {
    cy.visit('http://localhost:3000/comments/1')
    cy.contains('"laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"')
    cy.contains('Eliseo@gardner.biz')
  })
})