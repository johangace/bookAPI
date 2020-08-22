const should = require('should');
const sinon = require('sinon');
const bookController = require('../controllers/booksController');

describe(' Book controler test :', () => {
  describe('Post', () => {
    it('should not allow empty title on post', () => {
      const Book = function (book) {
        this.save = () => {};
      };

      const req = {
        body: {
          author: 'Johan',
        },
      };

      const res = {
        //creates spy function with SINON that keeps track of whats called hwats called with etc
        status: sinon.spy(),
        send: sinon.spy(),
        json: sinon.spy(),
      };

      const controller = bookController(Book);
      controller.post(req, res);
      res.status
        .calledWith(400)
        .should.equal(true, `bad status ${res.status.args[0][0]}`);
      res.send.calledWith('Title is required').should.equal(true);
    });
  });
});
