import React from "react";
import Timer from "@material-ui/icons/TimerRounded";
import LabelR from "@material-ui/icons/LabelRounded";
import CircularProgress from "@material-ui/core/CircularProgress";

class CharacterInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : null
    }
  }
  componentDidMount()
  {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4)
        if (xhr.status === 200) {
          let CharacterInfo = JSON.parse(xhr.response);
          this.setState({data : CharacterInfo});
         }
    }
      xhr.open("GET", this.props.data, true);
      xhr.send();
    
 
}

  render() {
    if(this.state.data)
    {
      // console.log("data",this.state.data);
     return (
      <div className="flex-box">
           <h3>
            {this.state.data.name}
          </h3>
          <h3>
            {this.state.data.gender}
          </h3>
          <h3>
            {this.state.data.born}
          </h3>
          <h3>
            {this.state.data.culture}
          </h3>
          <h3>
            {this.state.data.playedBy}
          </h3>
          <h3>
            {this.state.data.tvSeries.join("---")}
          </h3>
        </div>
    );
  }
  else
  {
    return(<div className="flex-box">
    <CircularProgress />
    </div>);
  }
}
}

export default CharacterInfo;
