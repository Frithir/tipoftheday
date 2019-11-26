import React, { Component, Fragment } from "react";
import "./App.css";
import Tabletop from "tabletop";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    Tabletop.init({
      key: "15bQmXWbDc7p1NdClwRUBHrc44YXcBfWcqfcHbSYrNG4",
      callback: googleData => {
        this.setState({
          data: googleData
        });
      },
      simpleSheet: true
    });
  }
  render() {
    // console.log("google sheet data --->", this.state);
    const data = this.state.data;
    return (
      <Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Tip of the day
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={`heroContent`}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                gutterBottom
              >
                Code tips
              </Typography>
              <Typography variant="h5" align="center" paragraph>
                A collection of code snipets & scripts.
              </Typography>
              <Typography align="center" paragraph>
                React and Google Sheets CMS.
              </Typography>
              <div className={`heroButtons`}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button
                      href="https://github.com/Firthir"
                      variant="outlined"
                      color="custom"
                    >
                      Github
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      href="https://frithir.com/"
                      variant="outlined"
                      color="custom"
                    >
                      Website
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={`cardGrid`} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={2}>
              {data.map((tip, i) => {
                return (
                  <Grid item key={tip.title + i} xs={8} sm={4} md={2}>
                    <Card className={`card`}>
                      <div className="code">
                        <pre>
                          <code>{tip.code}</code>
                        </pre>
                      </div>
                      <CardContent className={`cardContent`}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {tip.title}
                        </Typography>
                        <Typography>{tip.description}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button href={tip.url} size="small" color="primary">
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </main>
        <footer>
          <Typography align="center">
            {"Copyright © "}
            <Link href="https://material-ui.com/">Frith</Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </footer>
      </Fragment>
    );
  }
}

export default App;
