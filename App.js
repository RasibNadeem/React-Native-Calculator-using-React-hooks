import React, { useState } from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";

import Button from "./src/component/Button";

export default function App() {
  const [equation, setEquation] = useState("");
  const [currValue, setCurrValue] = useState("");
  const [preValue, setPreValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [pressed, setPressed] = useState(false);
  const buttonPress = (type, value) => {
    switch (type) {
      case "number":
        setPressed(false);
        setCurrValue(`${currValue}${value}`);
        setEquation(equation.concat(`${value}`));

        break;
      case "operator":
        setPressed(false);
        setOperator(value);
        setEquation(equation.concat(`${value}`));
        setPreValue(currValue);
        setCurrValue("");
        break;
      case "clear":
        setEquation("");
        setCurrValue("");
        setPreValue(null);
        setOperator(null);
        break;
      case "equal":
        const current = parseFloat(currValue);
        const previous = parseFloat(preValue);
        setPressed(true);
        switch (operator) {
          case "+":
            setCurrValue(previous + current);
            setOperator(null);
            setPreValue(null);
            break;
          case "-":
            setCurrValue(previous - current);
            setOperator(null);
            setPreValue(null);
            break;
          case "/":
            setCurrValue(previous / current);
            setOperator(null);
            setPreValue(null);
            break;
          case "*":
            setCurrValue(previous * current);
            setOperator(null);
            setPreValue(null);
            break;
        }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Calculator</Text>
      </View>
      <View style={styles.equation}>
        <Text style={styles.equationText}>{equation}</Text>
      </View>
      <View style={styles.result}>
        {pressed && <Text style={styles.resultText}>{currValue}</Text>}
      </View>
      <View style={styles.buttons}>
        <View style={styles.row}>
          <Button title="7" onPress={() => buttonPress("number", 7)} />
          <Button title="8" onPress={() => buttonPress("number", 8)} />
          <Button title="9" onPress={() => buttonPress("number", 9)} />
          <Button title="/" onPress={() => buttonPress("operator", "/")} />
        </View>
        <View style={styles.row}>
          <Button title="4" onPress={() => buttonPress("number", 4)} />
          <Button title="5" onPress={() => buttonPress("number", 5)} />
          <Button title="6" onPress={() => buttonPress("number", 6)} />
          <Button title="x" onPress={() => buttonPress("operator", "*")} />
        </View>
        <View style={styles.row}>
          <Button title="1" onPress={() => buttonPress("number", 1)} />
          <Button title="2" onPress={() => buttonPress("number", 2)} />
          <Button title="3" onPress={() => buttonPress("number", 3)} />
          <Button title="-" onPress={() => buttonPress("operator", "-")} />
        </View>
        <View style={styles.row}>
          <Button title="." onPress={() => buttonPress("number", ".")} />
          <Button title="0" onPress={() => buttonPress("number", 0)} />
          <Button title="C" onPress={() => buttonPress("clear")} />
          <Button title="+" onPress={() => buttonPress("operator", "+")} />
        </View>
        <View style={styles.row}>
          <Button title="=" width={360} onPress={() => buttonPress("equal")} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  heading: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "flex-end",
    alignItems: "baseline",
  },
  headingText: {
    fontSize: 30,
    color: "white",
  },
  result: {
    alignItems: "flex-end",
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    marginRight: 10,
  },
  equation: {
    alignItems: "flex-end",
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    marginRight: 10,
  },
  resultText: {
    fontSize: 30,
  },
  equationText: {
    fontSize: 30,
  },
  buttons: {
    borderTopWidth: 3,
    borderTopColor: "black",
    flex: 7,
    backgroundColor: "lightgrey",
  },
  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
