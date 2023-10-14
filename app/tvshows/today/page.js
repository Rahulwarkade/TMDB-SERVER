import React from 'react'
import '@/app/globals.css'
import Navigation from '@/Components/Navigation.js'
import Layout from '@/Components/Layout.js'
import '@/node_modules/bootstrap/dist/css/bootstrap.min.css';
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