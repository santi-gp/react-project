import React from 'react'
import MyForm from '../components/content/forms/MyForm'
import MyFormik from '../components/content/forms/MyFormik'
import Form from '../components/content/forms/Form'
import Product from '../components/content/rating/Product'
import GitUsers from '../components/content/restFulApi/GitUsers'

// Acordeon Forularios
export function ReactForm() {
  return (
    <article>
      <Form />
    </article>
  )
}

export function ReactFormik() {
  return (
    <article>
      <MyFormik />
    </article>
  )
}

export function HookForm() {
  return (
    <article>
      <MyForm />
    </article>
  )
}
//Acordeon Clasificación
export function Rating() {
  return (
    <article>
      <Product/>
    </article>
  )
}
export function GitHubUsers() {
  return (
    <article>
      <GitUsers/>
    </article>
  )
}


/*
<RatingStar rating="1" />
<RatingStar rating="2" />
<RatingStar rating="3" />
<RatingStar rating="4" />
<RatingStar rating="5" />
*/