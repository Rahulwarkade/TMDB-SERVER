import React from 'react'
import '../globals.css'
import Navigation from '@/Components/Navigation.js'
import Layout from '@/Components/Layout.js'

const page = () => {
  return (
    <>
    <div id="main">
        <div id="overlay">
            <div id="pageOne">
              <Navigation />
              <Layout />
            </div>
        </div>
    </div>
    </>
  )
}

export default page