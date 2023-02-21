import React from "react";
import { useEffect, useState } from "react";

//class
class Countdown extends React.Component {
  state = {
    count: 5,
  };

  //xu ly TH khi vua load trang thi ng dung chuyen ngay trang khac!
  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  //
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count - 1 });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count && this.state.count === 0) {
      if (this.timer) {
        clearInterval(this.timer);
        // this.props.onTimesup();
      }
    }
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}

//hook
const NewCountDown = (props) => {
  const [count, setCount] = useState(5);
  useEffect(() => {
    if (count === 0) {
      props.onTimesup();
      return;
    }
    let timer = setInterval(() => {
      console.log("print");
      setCount(count - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <div>
      <span>-------------</span>
      <div>{count}</div>
    </div>
  );
};

export { Countdown, NewCountDown };
