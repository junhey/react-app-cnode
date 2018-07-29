import React, {Component} from 'react';
import config from './config.json';
import styles from './app.css';//导入

class App extends Component{
  render() {
    return (
      <div className={styles.root}>//添加类名
        {config.greetText}
      </div>
    );
  }
}

export default App;
