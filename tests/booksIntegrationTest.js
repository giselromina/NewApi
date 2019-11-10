require('should');

const request = require('supertest');
const mongoose = require('mongoose');

process.env.EnV = 'Test';

const app = require('../app');

const Book = mongoose.model('Book');
const agent = request.agent(app);

describe('Book Crud Test', () => {
  it('should alow a book to be posted and return read and :it', (done) => {
    const bookPost = { title: 'My book', Author: 'Me', genre: 'fiction' };
    agent.post('/api/books')
      .send(bookPost)
      .expect(200)
      .end((err, results) => {
        // console.log(results);
        // results.body.read.should.not.equal('false');
         results.body.should.have.property('_id');
        done();
      });
  });
afterEach((done)=>{
  Book.deleteMany({}).exec();
  done();
});
after((done)=>{
  mongoose.connection.close();
  app.server.close(done());
})
});
