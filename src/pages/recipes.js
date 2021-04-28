import React from "react"
import Navbar from "../components/Navbar"
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"

const Recipes = () => {
  return (
    <Layout>
      <main className="page">
        <h2>recipes pages</h2>
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
