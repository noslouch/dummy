import React from 'react';
import WebUIComponent from 'package-engine/es5/component/WebUIComponent';
import ComponentFactory from 'package-engine/es5/component/Factory';

import themeDecorator from 'package-engine/es5/decorators/CSSModules';
import MyTheme from './decorators/Theme.css';

console.log({MyTheme})

class Header extends WebUIComponent {
  static decorators = {
    Theme: themeDecorator('Theme', MyTheme)
  }

  render() {
    const css = this.props.css || (() => '');

    return <h1 className={css('header')}>styled element</h1>;
  }
}

export default ComponentFactory('4ed72891-c126-4739-8b2d-b80285dc77f0', Header);