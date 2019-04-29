import React, { Component } from 'react';
import './app.css';

class App extends Component {
  elems = [];

  addRef(el) {
    this.elems.push(el);
  }

  render() {
    return (
      <div>
        <div id={'sm'} className="sm" ref={(el) => this.addRef(el)}>
          <svg width="100" height="100">
            <rect width="100" height="100" className={'rect'}/>
          </svg>
        </div>
        <div id={'md'} className="md" ref={(el) => this.addRef(el)}>
          <svg width="200" height="200">
            <rect width="200" height="200" className={'rect'}/>
          </svg>
        </div>
        <div id={'lg'} className="lg" ref={(el) => this.addRef(el)}>
          <svg width="400" height="400">
            <rect width="400" height="400" className={'rect'}/>
          </svg>
        </div>
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.elems.forEach(ref => {
        // offsetParent returns null when the element has style.display set to none.
        // see: http://tinyurl.com/y5z7exs9
        if (ref.offsetParent !== null) {
          console.log(`showing ${ref.id}`);
        }
      });
    });
  }
}

export default App;
