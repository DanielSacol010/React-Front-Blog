import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePublicationDetail } from '../../shared/hooks/usePublicationDetail';
import { AddComment } from '../comments/AddComment';
import './publicationDetail.css';

function PublicationDetail() {
  const { id } = useParams();
  const { publication, isFetching, fetchPublication } = usePublicationDetail();

  useEffect(() => {
    fetchPublication(id);
  }, [id, fetchPublication]);

  if (isFetching) return <div>Cargando publicación...</div>;
  if (!publication) return <div>No se encontró la publicación.</div>;

  const comments = publication.comments || [];

  return (
    <div className="publication-detail-container">
      <h2>{publication.title}</h2>
      <div className="publication-detail-meta">
        <span>Curso: {publication.course}</span>
        <span>Creado: {new Date(publication.createdAt).toLocaleString('es-ES')}</span>
      </div>
      <div className="publication-detail-content">{publication.content}</div>
      <div className="publication-detail-comments">
        <h3>Comentarios</h3>
        {comments.length === 0 ? (
          <p>No hay comentarios aún.</p>
        ) : (
          <ul>
            {comments.map((comment) => (
              <li key={comment._id} className="publication-comment">
                <div className="publication-comment-header">
                  <span className="publication-comment-username">{comment.username}</span>
                  <span className="publication-comment-separator"> | </span>
                  <span className="publication-comment-date">{new Date(comment.createdAt).toLocaleString('es-ES')}</span>
                </div>
                <div className="publication-comment-content">{comment.content}</div>
              </li>
            ))}
          </ul>
        )}
        <AddComment publicationId={id} onCommentAdded={() => fetchPublication(id)} />
      </div>
    </div>
  );
}

export { PublicationDetail };
