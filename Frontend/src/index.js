import React             from 'react';
import ReactDOM          from 'react-dom';
import './index.css';
import App               from './App';
import reportWebVitals   from './reportWebVitals';
import { BrowserRouter }                    from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

// Note this is unused, but would be the idiomatic way to retrieve things like playlists / albums on loading a component
// that renders their details on load.
const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
