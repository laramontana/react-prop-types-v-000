import React from 'react';
import ReactDOM from 'react-dom';

import Order from './components/Order';

ReactDOM.render(
  <Order
  scoops = { ["chocolate", "vanila"] }
  orderInfo = { {customerName: "Lara", orderedAt: 1511992840189 } }
   />,
  document.getElementById('root')
);
