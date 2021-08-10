import { makeStyles, Typography, Button } from "@material-ui/core";
import { useState } from "react";
import "./App.css";

const getRandomColor = () => {
  const colors = ["red", "orange", "green", "blue"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const ColorPara = (props) => {
  return (
    <p>
      {props.children.split(" ").map((text) => {
        return (
          <p style={{ color: getRandomColor(), display: "inline" }}>
            {text} &nbsp;
          </p>
        );
      })}
    </p>
  );
};

const styles = makeStyles(() => ({
  header: {

    marginTop: "100px",
  },

  headerText: {},

  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    marginTop: "100px",
    marginLeft: "20px",
    backgroundColor: "pink",
    color: "white",
    "&:hover": {
      backgroundColor: "pink",
  }
    
  },

  
}));

function App() {
  const classes = styles();

  const [count, setCount] = useState(0);

  setInterval(() => {
    let newCount = count + 1;
    setCount(newCount);
  }, 10);
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <ColorPara className={classes.headerText}>
          My name is wolfe, I love cryptocurrency, and emo.
        </ColorPara>
      </div>

      <Button className={classes.button} target= "_blank" href = "https://www.youtube.com/watch?v=xvFZjo5PgG0" >
        Click here to buy WolfeCoin
      </Button>
    </div>
  );
}

export default App;
