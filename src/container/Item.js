import React, { Component } from "react";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    fetch(`https://cnodejs.org/api/v1/topic/${id}`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
        this.setState({
          data: res.data
        });
      });
  }
  render() {
    return (
      <div>
        <h3>{this.state.data.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: this.state.data.content }}></p>
      </div>
    );
  }
}
