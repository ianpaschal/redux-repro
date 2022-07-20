import { Provider as StoreProvider } from 'react-redux';
import ReactDOM from 'react-dom';
import { store } from 'src/store';
import './styles.scss';

ReactDOM.render(
  (
    <StoreProvider store={store}>
      <p>Hello World</p>
    </StoreProvider>
  ),
  document.getElementById('root'),
);
