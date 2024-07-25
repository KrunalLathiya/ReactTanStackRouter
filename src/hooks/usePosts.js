// src/hooks/usePosts.js

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return data;
};

const fetchPost = async ({ queryKey }) => {
    const [, postId] = queryKey;
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return data;
};

export const usePosts = () =>
    useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    });

export const usePost = (postId) =>
    useQuery({
        queryKey: ['post', postId],
        queryFn: () => fetchPost({ queryKey: ['post', postId] }),
        enabled: !!postId,
    });