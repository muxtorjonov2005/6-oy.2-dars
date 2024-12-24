import React from 'react'
import './App.css'

import HelloWorld from './components/HelloWorld'
import AnimalGallery from './components/AnimalGallery'
import ColorList from './components/ColorList'
import WeekDays from './components/WeekDays'
import GreetingCard from './components/GreetingCard'
import FamousCities from './components/FamousCities'
import SeasonColor from './components/SeasonColor'
import SimpleMenu from './components/SimpleMenu'
function App() {
  return (
    <div>
      <div className="componen hello"><HelloWorld /></div>
      <div className="componen animal"><AnimalGallery /></div>
      <div className="componen color"><ColorList /></div>
      <div className="componen weekdays"><WeekDays /></div>
      <div className="componen greeting"><GreetingCard /></div>
      <div className="componen famous-cities"><FamousCities /></div>
      <div className="componen season-color"><SeasonColor /></div>
      <div className="componen menu"><SimpleMenu /></div>
    </div>
  )
}

export default App