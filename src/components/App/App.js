import React, { Fragment } from 'react';
import { PerseidsFooter } from 'perseids-react-components';

import Router from '../Router';

const App = () => (
  <Fragment>
    <Router basename={process.env.PUBLIC_URL} />
    <PerseidsFooter
      github="https://github.com/perseids-project/darcy-demo"
      report="https://github.com/perseids-project/darcy-demo/issues"
    />
  </Fragment>
);


export default App;
