import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/projects');
      setProjects(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <ProjectForm fetchProjects={fetchProjects} />
      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
