import Link from "next/link";
import Image from "next/image";


export default function Portafolio() {

    const posts = [
        {
          _id: 1,
          title: 'First Post',
          description: 'This is the first post on the blog.',
          image: 'https://res.cloudinary.com/dsf39ftzm/image/upload/v1711330351/portafolio/axbrs2nixcaa1b5kyyrf.png',
          date: '2024-03-25',
          slug: '/posts/first-post'
        },
        {
          _id: 2,
          title: 'Second Post',
          description: 'This is the second post on the blog.',
          image: 'https://res.cloudinary.com/dsf39ftzm/image/upload/v1711330351/portafolio/axbrs2nixcaa1b5kyyrf.png',
          date: '2024-03-26',
          slug: '/posts/second-post'
        },
        {
            _id: 3,
            title: 'First Post',
            description: 'This is the first post on the blog.',
            image: 'https://res.cloudinary.com/dsf39ftzm/image/upload/v1711330351/portafolio/axbrs2nixcaa1b5kyyrf.png',
            date: '2024-03-25',
            slug: '/posts/first-post'
          },
          {
            _id: 4,
            title: 'Second Post',
            description: 'This is the second post on the blog.',
            image: 'https://res.cloudinary.com/dsf39ftzm/image/upload/v1711330351/portafolio/axbrs2nixcaa1b5kyyrf.png',
            date: '2024-03-26',
            slug: '/posts/second-post'
          },
          {
            _id: 3,
            title: 'First Post',
            description: 'This is the first post on the blog.',
            image: 'https://res.cloudinary.com/dsf39ftzm/image/upload/v1711330351/portafolio/axbrs2nixcaa1b5kyyrf.png',
            date: '2024-03-25',
            slug: '/posts/first-post'
          },
          {
            _id: 4,
            title: 'Second Post',
            description: 'This is the second post on the blog.',
            image: 'https://res.cloudinary.com/dsf39ftzm/image/upload/v1711330351/portafolio/axbrs2nixcaa1b5kyyrf.png',
            date: '2024-03-26',
            slug: '/posts/second-post'
          },
          {
            _id: 3,
            title: 'First Post',
            description: 'This is the first post on the blog.',
            image: 'https://res.cloudinary.com/dsf39ftzm/image/upload/v1711330351/portafolio/axbrs2nixcaa1b5kyyrf.png',
            date: '2024-03-25',
            slug: '/posts/first-post'
          },
          {
            _id: 4,
            title: 'Second Post',
            description: 'This is the second post on the blog.',
            image: 'https://res.cloudinary.com/dsf39ftzm/image/upload/v1711330351/portafolio/axbrs2nixcaa1b5kyyrf.png',
            date: '2024-03-26',
            slug: '/posts/second-post'
          },
        // Add more posts here
      ];
  return (
    <div className="container py-6 lg:pb-10">
    <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
      <div className="flex-1 space-y-4">
        <h1 className=" text-2xl font-extrabold lg:text-3xl">
          Portafolio
        </h1>
        <p className="text-xl text-muted-foreground">
        Mis trabajos recientes
        </p>
      </div>
    </div>
    <hr className="my-8" />
    {posts?.length ? (
      <div className="flex flex-wrap justify-between items-center gap-4 w-full">
        {posts.map((post, index) => (
          <article
            key={post._id}
            className="group relative flex flex-col space-y-2"
          >
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                width={250}
                height={200}
                className="rounded-md border bg-muted transition-colors object-cover"
                priority={index <= 1}
              />
            )}
            <h2 className="text-2xl font-extrabold">{post.title}</h2>
            {post.description && (
              <p className="text-muted-foreground">{post.description}</p>
            )}
            {post.date && (
              <p className="text-sm text-muted-foreground">
                {post.date}
              </p>
            )}
            <Link href={post.slug} className="absolute inset-0">
              <span className="sr-only">View Article</span>
            </Link>
          </article>
        ))}
      </div>
    ) : (
      <p>No posts published.</p>
    )}
  </div>
  );
}