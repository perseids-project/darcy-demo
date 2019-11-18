import React from 'react';
import { PerseidsFooter } from 'perseids-react-components';

import Router from '../Router';

const App = () => (
  <>
    <Router basename={process.env.PUBLIC_URL} />
    <PerseidsFooter
      github="https://github.com/perseids-project/darcy-demo"
      report="https://github.com/perseids-project/darcy-demo/issues"
    />
  </>
);


export default App;
