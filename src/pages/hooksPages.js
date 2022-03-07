import React from 'react'
import MyForm from '../components/content/forms/MyForm'
import MyFormik from '../components/content/forms/MyFormik'
import Form from '../components/content/forms/Form'

export function ReactForm() {
  return (
    <article>
      <Form/>
    </article>
  )
}

export function ReactFormik() {
  return (
    <article>
      <MyFormik/>
    </article>
  )
}

export function HookForm() {
    return (
      <article>
        <MyForm/>
      </article>
    )
  }
