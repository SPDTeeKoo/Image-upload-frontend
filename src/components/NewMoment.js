import React, { useState } from 'react';
import axios from 'axios';

const NewMoment = () => {
  const [formData, setFormData] = useState({
    comment: '',
    tags: '',
    image: null,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('comment', formData.comment);
      formDataToSend.append('tags', formData.tags);
      formDataToSend.append('image', formData.image);

      const response = await axios.post(
        'http://localhost:8080/moment/add',
        formDataToSend
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add New Moment</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          name="comment"
          placeholder="Comment (max 100 characters)"
          onChange={handleInputChange}
          maxLength={100}
        />
        <input
          type="text"
          name="tags"
          placeholder="Tags"
          onChange={handleInputChange}
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button type="submit">Add Moment</button>
      </form>
    </div>
  );
};

export default NewMoment;
