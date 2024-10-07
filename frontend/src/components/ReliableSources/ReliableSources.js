import React from 'react';
import './ReliableSources.css';

const sources = [
  {
    title: 'IPCC',
    description: 'The Intergovernmental Panel on Climate Change provides comprehensive scientific assessments of current knowledge about climate change.',
    link: 'https://www.ipcc.ch/'
  },
  {
    title: 'EPA',
    description: 'The Environmental Protection Agency offers data and information on environmental factors and emission calculations.',
    link: 'https://www.epa.gov/'
  },
  // Add more sources as needed
];

const ReliableSources = () => {
  return (
    <div className="reliable-sources">
      <h2>Reliable Emission Factor Sources</h2>
      <div className="sources-container">
        {sources.map((source, index) => (
          <div key={index} className="source-card">
            <h3>{source.title}</h3>
            <p>{source.description}</p>
            <a href={source.link} target="_blank" rel="noopener noreferrer">Learn more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReliableSources;
