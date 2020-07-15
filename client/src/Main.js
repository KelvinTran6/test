import React from 'react';
import Navbar from './components/Navbar'
import Row from './components/Row.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as $ from 'axios';


class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      books: [],
    }
  }

  clicked() {

    const data = {
      title: "12125125arertsd125",
      content: "testing content",
      url: "https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg?w=600&quality=85",
      description: "testing description"
    }


    console.log("hello")
    $.post('/api/add', data)
      .then(res => console.log(res.data));
  }

  componentDidMount() {
    $.get('/api/books')
      .then(res => {
        const books = res.data
        let allBooks = []

        books.forEach(book => {
          console.log(book)
          const current = <Row info={book} shorten = {true} />
          allBooks.push(current)
        })
        this.setState({ books: allBooks })
      })
  }


  render() {
    return (
      <div>
        <div className="page">
          {this.state.books}
        </div>

      </div>
    );

  }
}

export default Main