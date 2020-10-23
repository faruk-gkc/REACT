import React from "react"; // ikincisi modül birincisi ise değişkendir.
import ReactDOM from "react-dom";
import Card from "./components/Card"; // Cardı import ettik..
import Collapse from "./components/Collapse"; // Cardı import ettik..

const App = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="card-group w-100">
          <div className="col">
            <Collapse href="collapseExample1">
              <Card
                cardText="Lorem Ipsum I"
                cardUpdate="Last updated 2 mins ago"
                image="https://picsum.photos/id/1/200/300"
              />
            </Collapse>
          </div>

          <div className="col">
            <Collapse href="collapseExample2">
              <Card
                cardTitle="Card Title II"
                cardText="Lorem Ipsum II"
                cardUpdate="Last updated 9 mins ago"
                image="https://picsum.photos/id/1/200/300"
              />
            </Collapse>
          </div>

          <div className="col">
            <Collapse href="collapseExample3">
              <Card
                cardTitle="Card Title III"
                cardText="Lorem Ipsum III"
                cardUpdate="Last updated 27 mins ago"
                image="https://picsum.photos/id/1/200/300"
              />
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
