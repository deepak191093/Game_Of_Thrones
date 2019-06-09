import React from "react";
import Book from "./Book";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Home";
import CircularProgress from "@material-ui/core/CircularProgress";


class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      data : false
    }
  }

  componentDidMount() {
    let xhr = new XMLHttpRequest();
    let data = null;
      xhr.onreadystatechange = () => {
      if (xhr.readyState === 4)
        if (xhr.status === 200) {
          let booksData = JSON.parse(xhr.response);
          booksData.forEach((bookData)=>{
            data = {
              url : bookData.url,
              name: bookData.name,
              authors : bookData.authors,
              numberOfPages: bookData.numberOfPages,
              mediaType: bookData.mediaType,
              publisher: bookData.publisher,
              released:bookData.released,
              isbn: bookData.isbn
              
            };
            var arr = JSON.parse(localStorage.getItem('Books')).filter(x => (x.isbn === data.isbn))
            if(arr.length === 0)
            {            
            this.props.addBooks({...data})
            }
            this.setState({data: true})
          })
        }
      };
      xhr.open("GET", "https://www.anapioficeandfire.com/api/books", true);
      xhr.send();
    
   
  }

  render() {
    if(this.state.data)
    {
    return (
       <div className="Search-container">
        <AppBar position="fixed" style={{backgroundColor : "black"}}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="Menu"
              onClick={() => {
                window.location.reload();
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" style={{fontFamily: "Cinzel Decorative"}}>Game Of Thrones API</Typography>
          </Toolbar>
        </AppBar>
        <Book/>
       </div>
    );
  }
else
{
return<CircularProgress />
}
  }
}

export default Books;
