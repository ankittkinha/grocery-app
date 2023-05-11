import React from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import CategoryList from '../../components/CategoryList'

export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <CategoryList/>
    </div>
  )
}
