import React, { useState } from 'react'
import { Publications } from '../../components/publications/Publications'
import { usePublications } from '../../shared/hooks/usePublications'
import { FilterBar } from './FilterBar'


const Content = () => {
  const { allPublications } = usePublications()
  const [selectedCourse, setSelectedCourse] = useState('')
  const [order, setOrder] = useState('recent')

  const courses = Array.from(new Set(allPublications.map(p => p.course)))

  const filteredPublications = allPublications
    .filter(p => !selectedCourse || p.course === selectedCourse)
    .sort((a, b) => order === 'recent'
      ? new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1 
      : new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1 
    )

  return (
    <div className='dashboard-container'>
      <div className='dashboard-background'/>
      <h1 className='dashboard-title'>Bienvenidos a mi blog</h1>
      <FilterBar
        courses={courses}
        selectedCourse={selectedCourse}
        setSelectedCourse={setSelectedCourse}
        order={order}
        setOrder={setOrder}
      />
      <Publications publications={filteredPublications} />
    </div>
  )
}

export default Content
