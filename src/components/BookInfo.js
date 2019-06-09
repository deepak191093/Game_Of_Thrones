import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Book from "@material-ui/icons/BookRounded";
import Person from "@material-ui/icons/Person";
import PersonPin from "@material-ui/icons/PersonPinCircleRounded";



class BookInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let date =  new Date(this.props.data.released).toDateString();
    return (
      <div className="book">
        <h2>Book Information </h2>
        <Book style={{width : "2em"}}/>
        <div className="Book-Name">
          <h3 style={{ textTransform: "uppercase", textDecoration: 'underline' }}>
            {this.props.data.name}
          </h3>
          <h3>By</h3>
          <h3>
            <Person/>
            {this.props.data.authors}
            <Person/>            
          </h3>
          <h3>Released On</h3>
          <h3>
           {date}      
          </h3>
          <div>
            <Link to={{pathname :'/characters' ,url : this.props.data.url}} style={{ color: "white" }}>
              <Avatar
                size="large"
                src="./images.png"
                style={{
                  height: "50px",
                  width: "50px",
                  display: "block",
                  margin: "auto",
                  border: "2px solid white"
                }}
              />
            </Link>
          </div>
         </div>
      </div>
    );
  }
}

export default BookInfo;
