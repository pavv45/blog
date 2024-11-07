import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

function BlogEntry({ entry, goBack }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(entry.comments || []);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      username: 'Usuario anonimo',
      text: comment,
      date: new Date().toLocaleString(),
      likes: 0
    };
    setComments([...comments, newComment]);
    setComment('');
  };

  const handleDeleteComment = (index) => {
    const newComments = comments.filter((_, i) => i !== index);
    setComments(newComments);
  };

  const handleLikeComment = (index) => {
    const newComments = comments.map((comment, i) =>
      i === index ? { ...comment, likes: comment.likes + 1 } : comment
    );
    setComments(newComments);
  };

  const handleEditComment = (index) => {
    setEditingIndex(index);
    setEditingText(comments[index].text);
  };

  const handleEditChange = (e) => {
    setEditingText(e.target.value);
  };

  const handleEditSubmit = (index) => {
    const newComments = comments.map((comment, i) =>
      i === index ? { ...comment, text: editingText } : comment
    );
    setComments(newComments);
    setEditingIndex(null);
    setEditingText('');
  };

  return (
    <div className="blog-entry">
      <button onClick={goBack}>Volver a la lista</button>
      <h2>{entry.title}</h2>
      <p><strong>Autor:</strong> {entry.author}</p>
      <p>{entry.content}</p>
      <div className="comments-container">
        <div className="comments-header">Comentarios</div>
        <p>Aquí puedes dejar tus comentarios sobre el artículo.</p>
        <form onSubmit={handleCommentSubmit} className="comment-input-container">
          <label htmlFor="comment" className="comment-label">Escribe un comentario:</label>
          <input
            type="text"
            id="comment"
            placeholder="Escribe un comentario..."
            value={comment}
            onChange={handleCommentChange}
            className="comment-input"
            required
          />
          <button type="submit" className="comment-button">
            <span role="img" aria-label="send">🚀</span>
          </button>
        </form>
        <div className="comments-list">
          {comments.map((comment, index) => (
            <div key={index} className="comment-item">
              <p><strong>{comment.username}</strong> <em>{comment.date}</em></p>
              {editingIndex === index ? (
                <div>
                  <input
                    type="text"
                    value={editingText}
                    onChange={handleEditChange}
                    className="edit-input"
                  />
                  <button onClick={() => handleEditSubmit(index)} className="save-button">
                    Guardar
                  </button>
                </div>
              ) : (
                <p>{comment.text}</p>
              )}
              <div className="comment-actions">
                <button onClick={() => handleLikeComment(index)} className="like-button">
                  <FontAwesomeIcon icon={faThumbsUp} /> {comment.likes}
                </button>
                <button onClick={() => handleDeleteComment(index)} className="delete-button">
                  <FontAwesomeIcon icon={faTrash} /> Eliminar
                </button>
                <button onClick={() => handleEditComment(index)} className="edit-button">
                  <FontAwesomeIcon icon={faEdit} /> Editar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogEntry;
