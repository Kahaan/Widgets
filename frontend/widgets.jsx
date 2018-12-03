import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather'

const panes = [
 {title: 'one', content: 'I am the first'},
 {title: 'two', content: 'Second pane here'},
 {title: 'three', content: 'Third pane here'}
]

function Root() {
  return(
    <div>
      <Clock />
      <Tabs panes={panes}/>
      <Weather />
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
