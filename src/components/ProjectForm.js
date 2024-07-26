import React, { useState } from 'react';
import axios from 'axios';

const ProjectForm = ({ fetchProjects }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/projects', formData);
      fetchProjects();
      setFormData({ title: '', description: '', link: '', image: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        type="text"
        name="link"
        value={formData.link}
        onChange={handleChange}
        placeholder="Project Link"
        required
      />
      <input
        type="text"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <button type="submit">Add Project</button>
    </form>
  );
};

export default ProjectForm;
