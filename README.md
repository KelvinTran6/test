## Project details
- Project was created using MongoDb, Express, Node.js and React and is currently hosted using heroku

### Application Features
- This application allows users to browse through different books and like what they find interesting
  - On the browse page users can scroll through all the books that have been posted
  - Each post displays the books title, description and picture
  - Clicking the post will expand the view giving users a small preview of the book, here the use can delete or like the post if they would like to
  - The user can press "continue" if they wish to continue reading the rest of the book
 
- Users can also add their own book using the Add Book page
  - On the Add book page users will be prompted to enter a title, book image url, description and the actual book content
  - Once added the user will be able to find their post on the browse page
  
  
- The Navigation bar also features a search bar so you can search for your favorite book
  - Unfortunately this feautre requires accurate spelling of the book title
  
  
### Bugs and errors
- Currently I am using the users "local storage" to keep track of posts that they have liked, this prevents them from being able to like the same post multiple times
- Ideally I would included a sign up and sign in functionality to keep track of what the user has liked instead of using local storage, however I did not do so do to limited time
- This local storage feature was only tested on Chrome and may not be available in other browsers




### Disclaimer
- This project has only been tested using windows and chrome
- Certain features may not work outside of these conditions 
