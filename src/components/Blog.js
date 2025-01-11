import React from 'react';
import './Blog.css';


function Blog() {
  return (
    <div className="blog">
      <h2>博客文章</h2>
      <ul>
        <li><a href="/blog/1">這是我的個人博客</a></li>
        <li><a href="/blog/2">React 初学者指南</a></li>
        <li><a href="/blog/3">如何提高写作技巧</a></li>
      </ul>
    </div>
  );
}

export default Blog;