import React from "react";
import { connect } from "react-redux";
import Books from "./Books";
import { addBook } from "../store/action";

const AddBooks = props => (
  <div>
    <Books addBooks={data => props.dispatch(addBook(data))} />
  </div>
);

export default connect()(AddBooks);
