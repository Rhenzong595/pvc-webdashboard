import React from 'react';
import {ReactFlow, Background, BackgroundVariant} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import nodes from './nodes'
import edges from './edges'

import WaterTankNode from './waterTankNode.jsx'
import UnitNode from './unitNode.jsx';



function Flow(){
  const nodeTypes = { waterTank: WaterTankNode, unitNode: UnitNode};
  return (
    <ReactFlow
              nodeTypes={nodeTypes}
              nodes = {nodes}
              edges = {edges}
              colorMode='dark'
              fitView
              panOnDrag = {false}
              nodesDraggable = {false}
    >
      {/* <Background color='#D9D9D9' size='6' variant={BackgroundVariant.Cross}/> */}
    </ReactFlow>
  )
}

export default Flow;