import React from 'react'
import { Button } from './components/ui/button'
import { SignInButton } from '@clerk/clerk-react'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'

const Home = () => {
  return (
    <div>
    {/* Header */}
    <Header/>
    {/* Hero */}
    <Hero/>
    {/* category */}
    <Category/>
    </div>
  )
}

export default Home