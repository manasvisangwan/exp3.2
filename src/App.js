import React, { useState } from "react";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" }
  ]);

  const [search, setSearch] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  // Add Book
  const addBook = () => {
    if (newTitle.trim() === "" || newAuthor.trim() === "") return;

    const newBook = {
      id: Date.now(),
      title: newTitle,
      author: newAuthor
    };

    setBooks([...books, newBook]);
    setNewTitle("");
    setNewAuthor("");
  };

  // Remove Book
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  // Search Filter
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Library Management System</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search books..."
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Add Book Form */}
      <div className="form">
        <input
          type="text"
          placeholder="Book Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Author"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        />

        <button onClick={addBook} className="add-btn">
          Add Book
        </button>
      </div>

      {/* Book List */}
      <div className="book-list">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <div>
              <h2>{book.title}</h2>
              <p>by {book.author}</p>
            </div>

            <button
              onClick={() => removeBook(book.id)}
              className="remove-btn"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;