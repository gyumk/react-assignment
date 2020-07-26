import React from "react";

export default class ClassComponent extends React.Component {
  // state = {
  //   list: [],
  //   count: 0,
  // };

  // data = {
  //   count: 0,
  // };

  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.click1 = this.click1.bind(this);
  }

  // 라이프사이클 훅
  componentDidMount() {
    setInterval(() => {
      this.setState({ ...this.state, count: this.state.count + 1 });
      // this.setState((state) => ({ count: state.count + 1 }));
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>클래스 컴포넌트 {this.state.count}</h1>
        <button onClick={this.click1}>클릭1</button>
        <button onClick={this.click2}>클릭2</button>
      </div>
    );
  }

  click1() {
    console.log("click1", this);
  }
  click2 = () => {
    console.log("click2", this);
  };
}
