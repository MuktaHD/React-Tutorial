import React from "react";

class GreetingByClass extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
         <h1>Congratulation ...
            {this.props.name}
        </h1>
      </>
    );
  }
}

export default GreetingByClass;