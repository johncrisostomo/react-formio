import * as actions from './actions';
import * as constants from './constants';
import * as reducers from './reducers';
import routes from './routes';
import selectors from './selectors';

export default class {
  actions = actions;
  constants = constants;
  reducers = reducers;

  constructor(config) {
    const defaultConfig = {
      storeKey: 'auth',
      path: 'auth',
      login: {
        form: 'user/login'
      },
      register: {
        form: 'user/register'
      }
    };
    this.config = Object.assign(defaultConfig, config);

    this.selectors = selectors(this.config);
    this.routes = routes(this.config);
  }
};