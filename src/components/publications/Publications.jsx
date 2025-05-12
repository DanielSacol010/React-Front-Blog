import PropTypes from 'prop-types'
import { PublicationCard } from './PublicationCard'
import { useNavigate } from 'react-router-dom'

export const Publications = ({ publications }) => {
  const navigate = useNavigate();
  const handleNavigateToPublication = (pid) => {
    navigate(`/publications/${pid}`);
  };

  return (
    <div className='publications-container'>
      {publications.map((p) => (
        <PublicationCard
          key={p.pid || p.createdAt}
          pid={p.pid}
          title={p.title}
          content={p.content}
          course={p.course}
          createdAt={p.createdAt}
          navigateToPublicationHandler={handleNavigateToPublication}
        />
      ))}
    </div>
  )
}

Publications.propTypes = {
  publications: PropTypes.arrayOf(
    PropTypes.shape({
      pid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      course: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired
    })
  ).isRequired
}
