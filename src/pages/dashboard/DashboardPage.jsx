import React from 'react'
import { Publications } from '../../components/publications/Publications'
import { usePublications } from '../../shared/hooks/usePublications'
import './dashBoardPage.css'

export const DashboardPage = () => {
  const { allPublications } = usePublications()

  return (
    <div className='dashboard-container'>
      <div className='dashboard-background'/>
      <Publications publications={allPublications} />
    </div>
  )
}
