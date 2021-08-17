// custom typefaces
import React from 'react';
import Root from './src/components/Root';
import 'typeface-montserrat';
import 'typeface-merriweather';
// normalize CSS across browsers
import './src/normalize.css';
// custom CSS styles
import './src/style.css';

// Highlighting for code blocks
import 'prismjs/themes/prism.css';

const wrapRootElement = Root;

export default {};

export { wrapRootElement };
