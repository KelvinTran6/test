const Note = require('../models/Note');

const Book = require('../models/book.model')

module.exports = function (app) {

  app.get('/api/notes', function (req, res) {
    Note.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });


  app.post('/api/notes', function (req, res) {
    Note.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.put('/api/notes/:id', function (req, res) {
    Note.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.delete('/api/notes/:id', function (req, res) {
    Note.findOneAndDelete({ _id: req.params.id })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });




  //newly added

  app.get('/api/books', function(req, res){
    Book.find()
      .then(books => res.json(books))
      .catch(err => res.status(400).json('Error: ' + err));
  });


  app.post('/api/add',function(req, res){
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