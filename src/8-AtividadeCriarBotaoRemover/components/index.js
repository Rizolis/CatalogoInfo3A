import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
 <div>
  <Header title="Bem-vindo"/>
 <Footer desenvolvedor=""/>
    </div>
)
}
ReactDOM.render(<App />, document.getElementById('root'));