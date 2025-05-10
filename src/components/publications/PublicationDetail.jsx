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
        {publication.comments && publication.comments.length > 0 ? (
          <ul>
            {publication.comments.map((c) => (
              <li key={c._id}>
                <strong>{c.username}:</strong> {c.content}
                <div className="publication-detail-comment-date">
                  {new Date(c.createdAt).toLocaleString('es-ES')}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <span>No hay comentarios.</span>
        )}
        <AddComment publicationId={id} onCommentAdded={() => fetchPublication(id)} />
      </div>
    </div>
  );
}

export { PublicationDetail };
