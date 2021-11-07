import React from "react";
import styled from "styled-components";
import { Accordion } from "react-bootstrap";
import { fetchRoutes, fetchStops } from "./utils/_api";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AccordionHeader = styled(Accordion.Header)`
  & button.accordion-button {
    background-color: #${(props) => props.bkgColor} !important;
    color: #${(props) => props.color};
  }
`;

function App() {
  const [subwayLines, setSubwayLines] = React.useState([]);
  const [stops, setStops] = React.useState([]);

  React.useEffect(() => {
    fetchRoutes()
      .then(({ data }) => setSubwayLines(data.routes))
      .catch((err) => {
        console.log(err?.response?.description);
        setSubwayLines([]);
      });
  }, []);

  const handleFetchStops = (routeId) => {
    setStops([]);
    fetchStops(routeId)
      .then(({ data }) => setStops(data.stops))
      .catch((err) => {
        console.log(err?.response?.description);
        setStops([]);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Massachusetts Bay Transportation Authority</h1>
        <h2>Subway Lines and Stops</h2>
      </header>
      <Accordion defaultActiveKey="-1">
        {subwayLines.map((subwayLine, idx) => (
          <Accordion.Item eventKey={idx + ""} key={subwayLine.id}>
            <AccordionHeader
              bkgColor={subwayLine.attributes.color}
              color={subwayLine.attributes.text_color}
              onClick={() => handleFetchStops(subwayLine.id)}
            >
              <strong>ID:&nbsp; </strong> {subwayLine.id}&nbsp;
              <strong>NAME:&nbsp; </strong> {subwayLine.attributes.long_name}
              &nbsp;
              <strong>DESCRIPTION:&nbsp; </strong>{" "}
              {subwayLine.attributes.description}
              &nbsp;
            </AccordionHeader>
            <Accordion.Body>
              <>
                <header>
                  <h3>Stops</h3>
                </header>
                <ul>
                  {stops.map((stop) => (
                    <li key={stop.id}>{stop.attributes.name}</li>
                  ))}
                </ul>
              </>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default App;
