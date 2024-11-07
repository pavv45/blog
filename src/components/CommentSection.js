import React, { useState } from 'react';
import { Trash2, Send } from 'lucide-react';

function CommentSection({ comments = [] }) {
  const [newComment, setNewComment] = useState('');
  const [allComments, setAllComments] = useState(
    comments.map(comment => ({
      text: typeof comment === 'string' ? comment : comment.text,
      timestamp: new Date().toISOString(),
      author: 'Usuario Anónimo'
    }))
  );

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        text: newComment,
        timestamp: new Date().toISOString(),
        author: 'Usuario Anónimo'
      };
      setAllComments([...allComments, comment]);
      setNewComment('');
    }
  };

  const handleDeleteComment = (indexToDelete) => {
    setAllComments(allComments.filter((_, index) => index !== indexToDelete));
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('es', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="space-y-6 mb-6">
        {allComments.map((comment, index) => (
          <div key={index} className="border-b border-gray-100 pb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="space-y-1">
                <div className="font-medium text-gray-900">{comment.author}</div>
                <div className="text-sm text-gray-500">
                  {formatDate(comment.timestamp)}
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-gray-700 mr-4">{comment.text}</p>
                <button
                  onClick={() => handleDeleteComment(index)}
                  className="text-gray-400 hover:text-red-500 transition-colors p-2"
                  aria-label="Eliminar comentario"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Formulario para nuevo comentario */}
      <form onSubmit={handleAddComment} className="relative">
        <input
          type="text"
          placeholder="Escribe un comentario..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-200 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-600 
                   hover:text-blue-700 disabled:text-gray-400 transition-colors"
          disabled={!newComment.trim()}
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}

export default CommentSection
