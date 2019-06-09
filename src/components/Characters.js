import React from "react";
import CharacterInfo from "./CharacterInfo";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import BackIcon from "@material-ui/icons/ArrowBack";
import CircularProgress from "@material-ui/core/CircularProgress";
import BottomScrollListener from "react-bottom-scroll-listener";

class Repos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      range: 0
    };
    this.appendComponents = this.appendComponents.bind(this);
  }
  componentWillMount() {
    if (this.props.location.url) {
      localStorage.setItem("url", this.props.location.url);
    }
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.response).characters;
        this.setState({ data });
      }
    };
    xhr.open("GET", localStorage.getItem("url"), true);
    xhr.send();
  }
  appendComponents() {
    this.setState({ range: this.state.range + 10 });
  }

  render() {
    if (this.state.data != null) {
      return (
        <div>
          <AppBar position="fixed" style={{ backgroundColor: "black" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="Menu"
                onClick={() => {
                  window.history.back();
                }}
              >
                <BackIcon />
              </IconButton>
              <Typography
                variant="h4"
                style={{ fontFamily: "Cinzel Decorative" }}
              >
                Books Characters
              </Typography>
            </Toolbar>
          </AppBar>
          <div className="flex-container" ref="appenddata">
            {this.state.data.slice(0, this.state.range + 10).map(x => (
              <CharacterInfo key={x} data={x} />
            ))}
          </div>
          <BottomScrollListener onBottom={this.appendComponents} />
        </div>
      );
    } else {
      return <CircularProgress />;
    }
  }
}

export default Repos;
