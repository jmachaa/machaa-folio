import React from 'react';
import '../assets/home.scss';

const Home = () => {
    const blogPosts = [
        {
            title: "Getting Started with React",
            date: "January 15, 2024",
            category: "Development",
            image: "https://picsum.photos/800/400",
            excerpt: "Learn the fundamentals of React and start building modern web applications.",
            author: "Thomas P Y"
        },
        {
            title: "Laravel Best Practices", 
            date: "January 10, 2024",
            category: "Backend",
            image: "https://picsum.photos/800/401",
            excerpt: "Discover essential Laravel tips and tricks for clean, maintainable code.",
            author: "Thomas P Y"
        },
        {
            title: "Full Stack Development Journey",
            date: "January 5, 2024", 
            category: "Career",
            image: "https://picsum.photos/800/402",
            excerpt: "My experience and insights from working as a full stack developer.",
            author: "Thomas P Y"
        }
    ];

    return (
        <div className="main min-h-screen bg-gray-100">
            <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h1 className="text-5xl font-bold mb-6">Thomas P Y's Blog</h1>
                    <p className="text-xl">Thoughts on Development, Design, and Tech</p>
                </div>
            </header>

            <main className="container mx-auto max-w-6xl px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover"/>
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                                        {post.category}
                                    </span>
                                    <span className="text-gray-500 text-sm ml-4">{post.date}</span>
                                </div>
                                <h2 className="text-2xl font-bold mb-3 text-gray-800">{post.title}</h2>
                                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <img src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" 
                                             alt={post.author} 
                                             className="w-10 h-10 rounded-full mr-3"/>
                                        <span className="text-gray-700">{post.author}</span>
                                    </div>
                                    <button className="text-blue-600 hover:text-blue-800">
                                        Read More →
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </main>

            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto max-w-4xl px-4 text-center">
                    <p>&copy; {new Date().getFullYear()} Thomas P Y. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
