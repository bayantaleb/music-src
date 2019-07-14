
import React from 'react';

import 'antd/dist/antd.css';

import CustomLayout from './containers/Layout';

import AlbumList from './containers/AlbumListView';


import Albumss from './albumss'


/*
function App() {
  return (
    <div className="App">
        <CustomLayout>
            <AlbumList />
        </CustomLayout>
    </div>
  );
}
*/

const App = () => (
    <div>
     <Albumss />
    </div>
)

export default App;
