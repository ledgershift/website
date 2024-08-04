import React from 'react';
import './Blog.css';

const Blog = () => {
    const posts = [
        {
            title: "Understanding Blockchain Technology",
            excerpt: "Dive into the fundamentals of blockchain technology and explore its transformative impact on various industries.",
            date: "August 4, 2024",
            link: "/blog/understanding-blockchain"
        },
        {
            title: "How Smart Contracts Work",
            excerpt: "Explore how smart contracts operate and their role in modern business transactions.",
            date: "July 20, 2024",
            link: "/blog/smart-contracts"
        },
        {
            title: "The Future of Cryptocurrencies",
            excerpt: "Discover the emerging trends in cryptocurrencies and their potential to reshape the global economy.",
            date: "July 10, 2024",
            link: "/blog/cryptocurrencies"
        },
        {
            title: "Decentralized Finance (DeFi) Explained",
            excerpt: "Learn about decentralized finance (DeFi), its benefits, and its impact on the financial sector.",
            date: "June 25, 2024",
            link: "/blog/defi-explained"
        },
        {
            title: "Introduction to Non-Fungible Tokens (NFTs)",
            excerpt: "Understand non-fungible tokens (NFTs), their applications, and how they are transforming digital ownership.",
            date: "June 15, 2024",
            link: "/blog/nfts-introduction"
        },
        {
            title: "Blockchain Security: Best Practices",
            excerpt: "Discover essential practices for securing blockchain networks and ensuring data integrity.",
            date: "May 30, 2024",
            link: "/blog/blockchain-security"
        }
    ];

    return (
        <section id="blog" className="blog-section">
            <h1 className="blog-title">Our Latest Blogs</h1>
            <div className="blog-list">
                {posts.map((post, index) => (
                    <div key={index} className="blog-item">
                        <h2 className="blog-item-title">{post.title}</h2>
                        <p className="blog-item-date">{post.date}</p>
                        <p className="blog-item-excerpt">{post.excerpt}</p>
                        <a href={post.link} className="blog-item-link">Read More</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Blog;
