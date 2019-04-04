class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        {/* <Nav>
            <BottomNav> */}
        <Switch>
          <Route exact  path="/" component={Dashboard} />
          <Route exact  path="/home" component={Feeds} />
          <Route exact  path="/chat" component={Chat} />
          <Route exact path="/bookmarks" component={Displaybookmarks}/>
        </Switch>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/home" component={Feeds} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/chatlog" component={ChatLog} />
          </Switch>
        
      </Router>
    );
  }
}