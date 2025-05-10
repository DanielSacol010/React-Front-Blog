import React from 'react'
import PropTypes from 'prop-types'
import { PublicationCard } from './PublicationCard'

export const Publications = ({ publications }) => {
  return (
    <div className='publications-container'>
      {publications.map((p) => (
        <PublicationCard
          key={p.pid || p.id || p.createdAt}
          pid={p.pid || p.id}
          title={p.title}
          content={p.content}
          course={p.course}
          createdAt={p.createdAt}
        />
      ))}
    </div>
  )
}

Publications.propTypes = {
  publications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      course: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired
    })
  ).isRequired
}
