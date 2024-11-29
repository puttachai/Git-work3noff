import React from 'react';
import ReactDOM from 'react-dom';
import Me from './me';
import Menu from './menu';
//import Product from './product';  // นำเข้า Product component

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Menu />
      <Me />
      <Product />  {/* เรียกใช้ Product component */}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
