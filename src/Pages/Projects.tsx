// src/components/Projects.tsx
import React from 'react';

const Projects = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2>Projects</h2>
        <div className="row">
          {/* Project 1 */}
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">Short description of project 1.</p>
              </div>
            </div>
          </div>
          {/* Add more projects similarly */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
