import React from 'react'
import PropTypes from 'prop-types'
import './PublicationCard.css'

function formatDate(dateString) {
    const date = new Date(dateString)
    return date.toLocaleString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

export const PublicationCard = ({
    title,
    content,
    course,
    createdAt,
    pid,
    navigateToPublicationHandler
}) => {
    const preview = content.length > 180 ? content.slice(0, 180) + '...' : content;
    const handleViewDetail = () => navigateToPublicationHandler(pid);
    return (
        <div className='publication-card'>
            <span className='publication-card-title'>{title}</span>
            <span className='publication-card-course'>{course}</span>
            <span className='publication-card-content'>{preview}</span>
            <span className='publication-card-date'>{formatDate(createdAt)}</span>
            <button onClick={handleViewDetail} className='publication-card-detail-btn'>Ver más</button>
        </div>
    )
}

PublicationCard.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    pid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    navigateToPublicationHandler: PropTypes.func.isRequired
}
