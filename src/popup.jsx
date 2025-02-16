import React from 'react';
import ReactDOM from 'react-dom';
import EmailForm from './components/EmailForm';

const App = () => {
  return (
    <div>
      <h1>Time Well Spent</h1>
      <EmailForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));