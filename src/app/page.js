import Category from '@/components/category/Category'
import Menu from '@/components/menu/Menu'
import Post from '@/components/post/Post'
import React from 'react'

export default function Home() {
  return (
    <main id='main'>
      <section className='main__header'>
        <h2>메뉴</h2>
        <Menu />
      </section>
      <section className='main__contents'>
        <Category />
        <Post />
      </section>
    </main>
  )
}
