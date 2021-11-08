import ReactDOM from 'react-dom';
import React from 'react';

function App(){
	const name = "자몽";

  return <h1>Hello {name}</h1>;
}

ReactDOM.render(<App />, document.getElementById('app'));