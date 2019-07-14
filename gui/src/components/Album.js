import React from 'react';

import { Table } from 'antd';




const columns = [
  {
    title: 'Artist',
    dataIndex: 'artist',
  },
  {
    title: 'Album',
    dataIndex: 'albums',
  },
  {
    title: 'Song',
    dataIndex: 'song',
  },
];




const Albums = (props) =>{
return (





      <div>
        <h2>List Of Albums</h2>
        <Table columns={columns} dataSource={props.data} size="middle" />

      </div>


)
}

export default Albums;
