import React, { Component } from 'react';
import TreeView from 'react-treeview';

const dataSource = [
  ['Welcome to the Jungle', 'What is your name?'],
  ['You enter the forest', 'Before you there is a fork in the path'],
  ['A scary monster jumps out at you', 'You run for your life...']
];

class Timeline extends Component {
  render() {
    return (
      <div className="Timeline">
        {dataSource.map((node, i) => {
          return (
            <TreeView
              key={i}
              defaultCollapsed={false}
              nodeLabel={'Chapter ' + i}
            >
              {node.map(entry => (
                <div className="info" key={entry + '-' + i}>
                  {entry}
                </div>
              ))}
            </TreeView>
          );
        })}
      </div>
    );
  }
}

export default Timeline;
