import PostsGrid from '../posts/posts-grid';
import styles from './featured-posts.module.css'

const Dummy_Posts = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze, and ships with built-in SSR.',
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze, and ships with built-in SSR.',
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze, and ships with built-in SSR.',
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze, and ships with built-in SSR.',
    date: '2022-02-10'
  }
]

function FeaturedPosts(props) {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={Dummy_Posts} />
    </section>
  )
}

export default FeaturedPosts;
