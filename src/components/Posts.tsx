import React from 'react';
import { CalendarIcon, ClockIcon, ArrowRightIcon } from 'lucide-react';
export const Posts = () => {
  // Mock blog posts
  const posts = [{
    id: 1,
    title: 'From API-less to Awesome: My project Story of Innovation and Adaptation',
    excerpt: 'The project started off super simple. A few challenges were distributed among three teams. One of them seemed like a breeze: consume an API, display the data on the screen, maybe add a few filters — piece of cake, right? And guess what? Our team randomly got that one (lucky us… or so we thought).',
    date: 'Apr 24, 2025',
    readTime: '5 min read',
    category: 'SW Development',
    url: "https://medium.com/@fernandoofilho/from-api-less-to-awesome-my-project-story-of-innovation-and-adaptation-almost-everything-went-b1d878d85b43",
    image: 'https://slabstatic.com/prod/uploads/7cd8fe75/posts/images/ZYioF99U6Y4PLiKXk0-NyhS9.png'
  },];
  return <section id="posts" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Latest <span className="text-blue-400">Posts</span>
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Sometimes I write about web development, software engineering, and
          technology trends.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => <article key={post.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover object-center" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <div className="text-gray-400 text-xs ml-auto flex items-center">
                    <CalendarIcon size={12} className="mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <ClockIcon size={12} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <a href={`${post.url ?? "#"}`} className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                  Read more
                  <ArrowRightIcon size={16} className="ml-1" />
                </a>
              </div>
            </article>)}
        </div>
        <div className="text-center mt-12">
          <a href="https://medium.com/@fernandoofilho" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors">
            View All Posts
            <ArrowRightIcon size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>;
};