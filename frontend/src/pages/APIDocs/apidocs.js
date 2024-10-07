import React from 'react';
import { RedocStandalone } from 'redoc';
// import SchemaTable from './SchemaTable';

import './apidocs.css';

const APIDocs = () => {
  return (
    <div className="api-docs">
      <header className="api-docs-header1">
        <h1>Emission Factor API Documentation</h1>
        {/* <p>Welcome to the Emission Factor API documentation. This page provides detailed information about the API endpoints, including descriptions and example requests.</p> */}
      </header>

      <section className="api-docs-intro">
        <h2>About the API</h2>
        <p>The Emission Factor API allows users to manage and retrieve emission factor data. It supports CRUD operations for contributors, data sources, geographical scopes, sectors, emission categories, and emission factors.</p>
      </section>


      <section className="api-docs-redoc">
        <h2>API Explorer</h2>
        <p>Use the interactive API explorer below to view the API endpoints. You can see detailed information and make real API requests.</p>
        {/* <RedocStandalone
          specUrl="/api-docs.json"
          options={{
            theme: { colors: { primary: { main: '#dd5522' } } },
            hideDownloadButton: true,
            expandResponses: "all"
          }}
        /> */}
        <RedocStandalone specUrl="/api-docs.json" />

      </section>
            <section className="api-docs-database">
              <h2>Database Models</h2>
              <p>The following diagram illustrates the database models used in the Emission Factor API. Each table represents a different aspect of the data structure.</p>
              <img src="/emissionfactor.png" alt="Database Models" className="api-docs-image"/>
      
            </section>
      
    </div>
  );
};

export default APIDocs;

