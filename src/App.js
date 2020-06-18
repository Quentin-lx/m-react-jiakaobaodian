import React from 'react';
import { Provider } from 'react-redux'
import Layout from './pages/Layout'
import 'assets/styles/reset.css';
import 'assets/styles/iconfonts.css';
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store/storemain'
class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <Router>
          <Layout></Layout>
        </Router>
      </Provider>
    )
  }
}
export default App;
