export const addBook = ({
  url = "",
  name = "",
  authors = "",
  numberOfPages = "",
  mediaType = "",
  publisher = "",
  released = "",
  isbn = ""
} = {}) => ({
  type: "ADD",
  addData: {
    url,
    name,
    authors,
    numberOfPages,
    mediaType,
    publisher,
    released,
    isbn
  }
});

