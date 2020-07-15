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


  componentDidMount() {
    $.get('/api/books')
      .then(res => {
        const books = res.data
        let allBooks = []

        books.forEach(book => {
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