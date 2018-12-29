import * as React from 'react';
import './App.css';
import {
  BrowserRouter,
  NavLink,
  Route,
} from "react-router-dom";
import Home from "./views/Home";
import Page1 from "./views/Page1";
import Page3 from "./views/Page3";
import { Slide } from 'react-reveal';
import homenet from './img/homenet.png'


interface IState {
  isRotate: boolean,
  isSidebar: boolean,
}

class App extends React.Component<{}, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      isRotate:false,
      isSidebar: false,
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.alert = this.alert.bind(this);
    this.rotate = this.rotate.bind(this);
  }

  public render() {
    return (
      <BrowserRouter>
        <div>

          {this.state.isSidebar &&
            <div style={{ position: 'absolute', zIndex: 100, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.6)' }} onClick={this.alert}>
              <Slide left={true}>
                <nav className='bg-info col-2' style={{ position: 'fixed', top: 0, bottom: 0 }}>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink exact={true} to="/"><span className="nav-link">Home</span></NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink exact={true} to="/stuff"><span className="nav-link">Stuff</span></NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink exact={true} to="/contact"><span className="nav-link">Contact</span></NavLink>
                    </li>
                  </ul>
                </nav>
              </Slide>

            </div>
          }


          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          
            <span className="navbar-brand" onClick={this.toggleSidebar} style={{cursor:'pointer'}}><img src={homenet} style={{height:'30px'}}/>HomeNet</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink exact={true} to="/"><span className="nav-link">Home</span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact={true} to="/stuff"><span className="nav-link">Stuff</span></NavLink>
                </li>

                <li className="nav-item">
                  <NavLink exact={true} to="/settings">
                    <span className="nav-link">
                      <i className="fas fa-cog" style={this.state.isRotate?{transform: 'rotate(20deg)'}:{}} onMouseOver={this.rotate} />
                    </span></NavLink>
                </li>
              </ul>

            </div>
          </nav>

          <div className="content">
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/stuff" component={Page1} />
            <Route exact={true} path="/contact" component={Page3} />
          </div>
        </div>
      </BrowserRouter>
    );
  }


  private toggleSidebar() {
    this.setState({ isSidebar: true })
  }

  private alert() {
    this.setState({ isSidebar: false })
  }

  private rotate() {
    this.setState({isRotate:true})
  }


}

export default App;
