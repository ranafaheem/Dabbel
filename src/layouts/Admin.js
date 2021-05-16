import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch } from "react-router-dom";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import routes from "routes.js";

var ps;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeColor: "info",
    };
    this.mainPanel = React.createRef();
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      this.mainPanel.current.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }
  // handleActiveClick = (color) => {
  //   this.setState({ activeColor: color });
  // };
  // handleBgClick = (color) => {
  //   this.setState({ backgroundColor: color });
  // };
  render() {
    return (
      <div className="wrapper">
        <Sidebar
          {...this.props}
          routes={routes}
          activeColor={this.state.activeColor}
        />

        <div className="main-panel" ref={this.mainPanel}>
          {/* <DemoNavbar {...this.props} />
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
          </Switch> */}
          <>
            <div className="content">
              <DemoNavbar {...this.props} />
              <Row>
                <Col lg="3" md="6" sm="6">
                  <Card
                    className="card-stats"
                    style={{ backgroundColor: "#283046", color: "white" }}
                  >
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-globe text-warning" />
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <p className="card-category">Capacity</p>
                            <CardTitle tag="p">150GB</CardTitle>
                            <p />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter>
                      <hr />
                      <div className="stats">
                        <i className="fas fa-sync-alt" /> Update Now
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <Card
                    className="card-stats"
                    style={{ backgroundColor: "#283046", color: "white" }}
                  >
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-money-coins text-success" />
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <p className="card-category">Revenue</p>
                            <CardTitle tag="p">$ 1,345</CardTitle>
                            <p />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter>
                      <hr />
                      <div className="stats">
                        <i className="far fa-calendar" /> Last day
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <Card
                    className="card-stats"
                    style={{ backgroundColor: "#283046", color: "white" }}
                  >
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-vector text-danger" />
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <p className="card-category">Errors</p>
                            <CardTitle tag="p">23</CardTitle>
                            <p />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter>
                      <hr />
                      <div className="stats">
                        <i className="far fa-clock" /> In the last hour
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <Card
                    className="card-stats"
                    style={{ backgroundColor: "#283046", color: "white" }}
                  >
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-favourite-28 text-primary" />
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <p className="card-category">Followers</p>
                            <CardTitle tag="p">+45K</CardTitle>
                            <p />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter>
                      <hr />
                      <div className="stats">
                        <i className="fas fa-sync-alt" /> Update now
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <Card style={{ backgroundColor: "#283046", color: "white" }}>
                    <CardHeader>
                      <CardTitle tag="h5">Users Behavior</CardTitle>
                      <p className="card-category">24 Hours performance</p>
                    </CardHeader>
                    <CardBody></CardBody>
                    <CardFooter>
                      <hr />
                      <div className="stats">
                        <i /> Updated 3 minutes ago
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Card style={{ backgroundColor: "#283046", color: "white" }}>
                    <CardHeader>
                      <CardTitle tag="h5">Email Statistics</CardTitle>
                      <p className="card-category">Last Campaign Performance</p>
                    </CardHeader>
                    <CardBody></CardBody>
                    <CardFooter>
                      <hr />
                      <div className="stats">
                        <i className="fa fa-calendar" /> Number of emails sent
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="8">
                  <Card
                    className="card-chart"
                    style={{ backgroundColor: "#283046", color: "white" }}
                  >
                    <CardHeader>
                      <CardTitle tag="h5">NASDAQ: AAPL</CardTitle>
                      <p className="card-category">Line Chart with Points</p>
                    </CardHeader>
                    <CardBody></CardBody>
                    <CardFooter>
                      <div className="chart-legend">
                        <i className="fa fa-circle text-info" /> Tesla Model S{" "}
                        <i className="fa fa-circle text-warning" /> BMW 5 Series
                      </div>
                      <hr />
                      <div className="card-stats">
                        <i className="fa fa-check" /> Data information certified
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </div>
          </>
        </div>
      </div>
    );
  }
}

export default Dashboard;
