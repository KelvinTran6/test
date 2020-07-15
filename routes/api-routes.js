const Book = require('../models/book.model')

module.exports = function (app) {





  //newly added

  app.get('/api/books', function (req, res) {
    Book.find()
      .then(books => res.json(books))
      .catch(err => res.status(400).json('Error: ' + err));
  });


  app.post('/api/add', function (req, res) {
    const title = req.body.title;
    const content = req.body.content
    const likes = Number(0)
    const url = req.body.url
    const description = req.body.description
    const newBook = new Book({ title, content, likes, url, description })
    newBook.save()
      .then(() => res.json('Book added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  app.delete('/api/book/:title', function (req, res) {
    var title = req.params.title
    Book.findOneAndDelete({ title: title })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });


  app.get('/api/:title', function(req, res){
    var title = req.params.title
    Book.findOne({title: title})
      .then(books => res.json(books))
      .catch(err => res.status(400).json('Error: ' + err));
  });


  app.put('/api/update/:title', function (req, res) {
    var title = req.params.title;
    Book.findOne({ title: title }, function (err, foundObject) {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        if (!foundObject) {
          res.status(404).send();
        } else {
          if (req.body.likes) {
            foundObject.likes = req.body.likes;
          }

          foundObject.save(function (err, updatedObject) {
            if (err) {
              console.log("error")
              res.status(500).send();
            } else {
              res.send(updatedObject);
            }
          })
        }
      }
    })
  });
}