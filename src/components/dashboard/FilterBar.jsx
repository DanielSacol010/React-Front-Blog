import React from 'react';
import PropTypes from 'prop-types';
import './FilterBar.css';

export const FilterBar = ({ courses, selectedCourse, setSelectedCourse, order, setOrder }) => {
  return (
    <div className="filter-bar">
      <label className="filter-bar-label">
        Curso:
        <select
          value={selectedCourse}
          onChange={e => setSelectedCourse(e.target.value)}
          className="filter-bar-select"
        >
          <option value=''>Todos</option>
          {courses.map(course => (
            <option key={course} value={course}>{course}</option>
          ))}
        </select>
      </label>
      <button
        className="filter-bar-btn filter-bar-btn-order"
        onClick={() => setOrder(order === 'recent' ? 'oldest' : 'recent')}
      >
        {order === 'recent' ? 'Más antiguos' : 'Más recientes'}
      </button>
      {selectedCourse && (
        <button
          className="filter-bar-btn filter-bar-btn-clear"
          onClick={() => setSelectedCourse('')}
        >
          Limpiar filtro
        </button>
      )}
    </div>
  );
};

FilterBar.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCourse: PropTypes.string.isRequired,
  setSelectedCourse: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  setOrder: PropTypes.func.isRequired
};
