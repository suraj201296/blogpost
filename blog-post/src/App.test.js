import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import axios from 'axios';

jest.mock('axios');

describe('App Component', () => {
  const mockPosts = [
    { id: 1, title: 'Post 1', content: 'Content 1', description: 'Description 1' },
    { id: 2, title: 'Post 2', content: 'Content 2', description: 'Description 2' },
  ];
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: { articles: mockPosts } });
  });

  test('fetches and displays posts', async () => {
    render(
        <App />
    );
    await waitFor(() => {
      expect(screen.getByText('Post 1')).toBeInTheDocument();
      expect(screen.getByText('Post 2')).toBeInTheDocument();
    });
  });

  test('next page pagination button click', async () => {
    render(
      <App/>
    )
    fireEvent.click(screen.getByText('Next'));

    await waitFor(() => {
      expect(screen.getByText('Post 1')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Previous'));

    await waitFor(() => {
      expect(screen.getByText('Post 1')).toBeInTheDocument();
    });
    
  });

  test('navigates to post details page', async () => {
    render(
        <App />
    );
  
    await waitFor(() => {
      expect(screen.getByText('Blog Posts')).toBeInTheDocument();
    });

    fireEvent.click(screen.getAllByText('Read More')[0]);

    await waitFor(() => {
      expect(screen.getByText('Description 1')).toBeInTheDocument();
    });
  });

  test('handles fetch error', async () => {
    const errorMessage = 'Network Error';
    axios.get.mockRejectedValue(new Error(errorMessage));
  
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  
    render(<App />);
  
    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching data:', expect.any(Error));
    });
  
    consoleErrorSpy.mockRestore();
  });

});