import React from 'react';
import { entries } from '../data/entries';

function BlogList({ onSelectEntry }) {
  return (
    <div className="blog-list">
      <h2 className="text-2xl font-bold mb-4">Blogs</h2>
      <ul className="space-y-4">
        {entries.map((entry, index) => (
          <li 
            key={index} 
            onClick={() => onSelectEntry(entry)} 
            className="cursor-pointer p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center">
              <img 
                src={entry.imageUrl} 
                alt={entry.title} 
                style={{ width: '100px', height: '100px' }} 
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">{entry.title}</h3>
                <p className="text-gray-600">{entry.author}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
