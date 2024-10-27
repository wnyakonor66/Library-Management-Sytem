Book Management Application
Overview
This application is designed to manage a collection of books, allowing users to add and display books in a user-friendly interface. All book objects are stored in an array, which serves as the core data structure for the application.

Features
Add New Books: Users can input details for a new book, including the author, title, number of pages, read status, and any additional information.
Display Books: Books are displayed in a structured format, either in a table or as individual cards, making it easy to visualize the entire collection.
Implementation Details
Book Storage
All book objects are stored in an array. Each book object contains properties like author, title, pages, isRead, and any additional information you might want to include.
Functions
Add Book Function:

This function takes user input and creates a new book object to be stored in the array. When a user submits the form, the book details are added to both the array and the libraryObject.
Display Books Function:

A function that loops through the array of book objects and displays each book on the page. The display can be formatted as cards or in a table format, making it easy to view the entire library at once.
User Input Form
A "NEW BOOK" button brings up a form that allows users to input details for new books. The form can be displayed in a sidebar, a modal, or any other preferred method.
It's essential to prevent the default form submission behavior using event.preventDefault() to handle the form submission within the application without redirecting or reloading the page.
Future Enhancements
While the current implementation does not include persistent storage (e.g., local storage or a database) to save book information between page reloads, the application can be extended to include this functionality in the future.
Conclusion
This Book Management Application provides a basic functionality to manage books and encourages good coding practices by separating the data logic from the display logic. This separation allows for greater flexibility and maintainability as the application scales.

Getting Started
To run the application locally:

Clone the repository.
Open index.html in your browser.
Use the "NEW BOOK" button to start adding books!