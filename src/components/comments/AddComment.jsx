import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useCreateComment } from '../../shared/hooks/useCreateComment';
import '../publications/publicationDetail.css';

export const AddComment = ({ publicationId, onCommentAdded }) => {
  const { submitComment, submitting, error, setError } = useCreateComment();
  const [username, setUsername] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ok = await submitComment({ username, content, publication: publicationId });
    if (ok) {
      setUsername('');
      setContent('');
      setError('');
      if (onCommentAdded) onCommentAdded();
    }
  };

  return (
    <form className="publication-comment-form" onSubmit={handleSubmit}>
      <h4>Agregar comentario</h4>
      <input
        type="text"
        placeholder="Tu nombre"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
        disabled={submitting}
      />
      <textarea
        placeholder="Comentario"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
        disabled={submitting}
      />
      <button type="submit" disabled={submitting || !username || !content}>
        {submitting ? 'Enviando...' : 'Comentar'}
      </button>
      {error && <div className="publication-comment-error">{error}</div>}
    </form>
  );
};

AddComment.propTypes = {
  publicationId: PropTypes.string.isRequired,
  onCommentAdded: PropTypes.func
};
