import React, { useState } from 'react';
import Modal from 'react-modal';
import '../App.css';

Modal.setAppElement('#root');

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'QOT x Where Do We Go Now',
      description: 'A Queen of Tears edit with Where Do We Go Now by Gracie Abrams.',
      image: 'images/project1.jpg',
      details: 'This was my first project that was edited in After Effects.',
    },
    {
      id: 2,
      title: 'QOT x I Wish You Would',
      description: 'A Queen of Tears edit with I Wish You Would by Taylor Swift.',
      image: 'images/project2.jpg',
      details: 'This was my second project that I edited in Adobe Premiere Pro and After Effects.',
    },
    {
      id: 3,
      title: 'QOT x She Is In The Rain',
      description: 'A Queen of Tears edit with She Is In The Rain by The Rose.',
      image: 'images/project3.jpg',
      details: 'This was my last project before I took a break in editing.',
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project" onClick={() => openModal(project)}>
            <img src={project.image} alt={`${project.title} Project`} />
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onRequestClose={closeModal}
          contentLabel="Project Details"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <h2>{selectedProject.title}</h2>
          <img src={selectedProject.image} alt={selectedProject.title} />
          <p>{selectedProject.details}</p>
          <button onClick={closeModal} className="modal-close-btn">Close</button>
        </Modal>
      )}
    </section>
  );
};

export default Projects;
