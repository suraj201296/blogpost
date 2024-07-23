

// src/BlogPostDetails.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import BlogPostDetails from '../BlogPostDetails';

const mockPosts = [
  { title: 'Post 1', content: 'Content 1', description: 'Description 1', urlToImage: 'https://via.placeholder.com/150', author: 'Author 1' },
  { title: 'Post 2', content: 'Content 2', description: 'Description 2', urlToImage: 'https://via.placeholder.com/150', author: 'Author 2' },
];

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="/" element={<div>Blog Posts</div>} />
        <Route path="/post/:id" element={ui} />
      </Routes>
    </MemoryRouter>
  );
};

test('renders post details correctly for a valid post ID', () => {
  renderWithRouter(<BlogPostDetails posts={mockPosts} />, { route: '/post/0' });

  expect(screen.getByText('Post 1')).toBeInTheDocument();
  expect(screen.getByText('Content 1')).toBeInTheDocument();
  expect(screen.getByText('Description 1')).toBeInTheDocument();
  expect(screen.getByText('Author: Author 1')).toBeInTheDocument();
  expect(screen.getByAltText('Post 1')).toBeInTheDocument();
});

test('navigates back to the list when "Back to list" button is clicked', () => {
  renderWithRouter(<BlogPostDetails posts={mockPosts} />, { route: '/post/0' });

  const backButton = screen.getByRole('button', { name: /Back to list/i });
  fireEvent.click(backButton);

  expect(screen.getByText('Blog Posts')).toBeInTheDocument();
});

test('displays "Post not found" message for an invalid post ID', () => {
  renderWithRouter(<BlogPostDetails posts={mockPosts} />, { route: '/post/999' });

  expect(screen.getByText('Post not found')).toBeInTheDocument();
});
