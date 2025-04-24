'use client'
import PostContent from "@/components/posts/createPost/PostForm/PostContent"
import Common from "@/components/test/page"
import React, { useEffect } from "react"
import { useForm, FormProvider, useFormContext } from "react-hook-form"


export default function App() {
  const methods = useForm()
  const onSubmit = (data) => console.log(data)
  const { register, reset } = methods


  useEffect(() => {
    reset({
      name: "data",
    })
  }, [reset]) // ❌ never put `methods` as the deps


  return (
    <FormProvider {...methods}>
      // pass all methods into the context
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <NestedInput />
        <textarea {...register("name")} />
        <Common />
        <PostContent />
        <input type="submit" />
        
      </form>
    </FormProvider>
  )
}


function NestedInput() {
  const { register } = useFormContext() // retrieve all hook methods
  return <input {...register("test")} />
}