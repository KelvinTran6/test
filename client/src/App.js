// import React, { Component } from 'react';
// import Form from './components/Form';
// import Note from './components/Note';
// import * as $ from 'axios';
// import './app.css';

// class App extends Component {

//   state = {
//     notesList: [],
//     newNote: '',
//     noteUpdate: '',
//     isUpdating: false,
//     updateId: ''
//   }

//   update = (event) => {
//     event.preventDefault();
//     this.setState({isUpdating: false})
//     $.put(`/api/notes/${this.state.updateId}`, {content: this.state.noteUpdate})
//       .then(() => {
//         this.getNotes();
//       })
//   }

//   handleClick = (event) => {
//     event.preventDefault();
//     $.post('/api/notes', { content: this.state.newNote })
//       .then(() => {
//         this.getNotes();
//       })
//   }

//   getNotes = () => {
//     $.get('/api/notes')
//       .then((result) => {
//         this.setState({ notesList: result.data })
//       })
//   }

//   componentDidMount() {
//     this.getNotes();
//   }

//   deleteHandler = (event) => {
//     $.delete(`/api/notes/${event.target.value}`)
//       .then(() => {
//         this.getNotes();
//       })
//   }

//   handleChange = (event) => {
//     this.setState({ newNote: event.target.value })
//   }

//   handleUpdate = event => {
//     this.setState({ noteUpdate: event.target.value })
//   }

//   showUpdate = (event) => {
//     this.setState({ isUpdating: true, updateId: event.target.value })
//   }

//   render() {
//     return (
//       <div className="App">
//         <Form val={this.state.newNote} changeHandler={this.handleChange} clickHandler={this.handleClick} heading='Add'/>
//         {this.state.isUpdating
//           ? <Form val={this.state.noteUpdate} changeHandler={this.handleUpdate} clickHandler={this.update} heading='Update'/>
//           : this.state.notesList.map(note => (
//             <Note  
//               key={note._id}
//               id={note._id} 
//               content={note.content} 
//               onUpdate={this.showUpdate} 
//               onDelete={this.deleteHandler}
//             />))
//         }
        
//       </div>
//     );
//   }
// }

export default App;

import React from 'react';
import Row from './components/Row.js'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, makeStyles } from '@material-ui/core/';
import './App.css';
import axios from 'axios'


class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      books: [],
    }
  }

  clicked(){

    const data = {
      title: "test title",
      content: "testing content",
      url:"https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg?w=600&quality=85",
      description: "testing description"
    }


    console.log("hello")
    $.post('/api/add', data)
    .then (res => console.log(res.data));
  }

  async componentDidMount(){
    this.clicked()


    $.get('/api/books')
    .then(res => {
      const books = res.data
      let allBooks = []

      books.forEach(book => {
        console.log(book)
        const current = <Row info={book} />
        allBooks.push(current)
      })

      this.setState({ books: allBooks})
    })
  }

  
  render(){
    return (
      <div className="page">
        {this.state.books}
        Library Application
      </div>
    );

  }
}

export default App