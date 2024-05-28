import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from './component/ItemList';

const App = () => {
  return (
    <div>
      <h1>ItemList Test</h1>
      <h2>With Items</h2>
      <ItemList items={['Apple', 'Banana', 'Cherry']} />
      <h2>Without Items</h2>
      <ItemList items={[]} />
    </div>
  );
};

export default App;