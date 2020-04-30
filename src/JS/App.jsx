import React, { useState } from 'react';
import {
  Container, Col, Row, Button,
} from 'reactstrap';
import '../CSS/App.css';
import HSLToHex from './HSLToHex';

export default function App() {
  const [amountOfColors, setColorAmount] = useState(5);
  const [colorArr, setColorArr] = useState([]);
  // Issue a random number between 0 and 365 to issue initial
  // color hue
  const initialHue = Math.floor(Math.random() * Math.floor(365));
  // Issue a random number between 0 and 365 to issue initial
  // color lightness
  const initialLightness = Math.floor(Math.random() * (95 - 20) + 20);
  const initialSaturation = Math.floor(Math.random() * (85 - 20) + 20);

  let newColor = 0;
  const x = Math.floor(Math.random() * (360 - 5) + 5);
  const tetradicColors = () => {
    colorArr.push(initialHue);
    for (let i = 0; i < amountOfColors - 1; i += 1) {
      newColor = colorArr[i] + x;
      if (newColor > 360) {
        newColor -= 360;
      }
      colorArr.push(newColor);
    }
    colorArr.sort((a, b) => a - b);
  };
  tetradicColors();
  return (
    <Container>
      <Row>
        <Col>
          <div
            className="App"
            style={{
              backgroundColor: `hsl(${colorArr[0]}, ${initialSaturation}%, ${initialLightness}%)`,
            }}
          >
            <h1>{HSLToHex(colorArr[0], initialSaturation, initialLightness)}</h1>
          </div>
        </Col>
        <Col>
          <div
            className="App"
            style={{
              backgroundColor: `hsl(${colorArr[1]}, ${initialSaturation}%, ${initialLightness}%)`,
            }}
          >
            <h1>{HSLToHex(colorArr[1], initialSaturation, initialLightness)}</h1>
          </div>
        </Col>
        <Col>
          <div
            className="App"
            style={{
              backgroundColor: `hsl(${colorArr[2]}, ${initialSaturation}%, ${initialLightness}%)`,
            }}
          >
            <h1>{HSLToHex(colorArr[2], initialSaturation, initialLightness)}</h1>
          </div>
        </Col>
        <Col>
          <div
            className="App"
            style={{
              backgroundColor: `hsl(${colorArr[3]}, ${initialSaturation}%, ${initialLightness}%)`,
            }}
          >
            <h1>{HSLToHex(colorArr[3], initialSaturation, initialLightness)}</h1>
          </div>
        </Col>
        <Col>
          <div
            className="App"
            style={{
              backgroundColor: `hsl(${colorArr[4]}, ${initialSaturation}%, ${initialLightness}%)`,
            }}
          >
            <h1>{HSLToHex(colorArr[4], initialSaturation, initialLightness)}</h1>
          </div>
        </Col>
      </Row>
      <Button onClick={() => setColorArr([])}>Click me</Button>
    </Container>
  );
}
