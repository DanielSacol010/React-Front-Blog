import { useState } from 'react';
import { createComment } from '../../services/api';
import toast from 'react-hot-toast';

export const useCreateComment = () => {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const submitComment = async ({ username, content, publication }) => {
    setSubmitting(true);
    setError('');
    try {
      const result = await createComment({ username, content, publication });
      if (result.error) {
        setError('Error al agregar el comentario');
        toast.error('Error al agregar el comentario');
        return false;
      }
      toast.success('Comentario agregado');
      return true;
    } catch {
      setError('Error al agregar el comentario');
      toast.error('Error al agregar el comentario');
      return false;
    } finally {
      setSubmitting(false);
    }
  };

  return {
    submitComment,
    submitting,
    error,
    setError
  };
};
