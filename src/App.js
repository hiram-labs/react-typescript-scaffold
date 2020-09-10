import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import styles from './App.module.scss';
import cx from 'classnames';
import { Layout } from './components';

class App extends Component {
  render() {
    return (
      <div className={cx(styles.container)}>
        <Layout header={''} body={''} footer={''} />
      </div>
    );
  }
}

export default hot(module)(App);
