// src/components/Posts.jsx

import { Container, Typography, CircularProgress } from '@mui/material';
import { usePosts } from '../hooks/usePosts';
import PostList from './PostList';

const Posts = () => {
    const { data, error, isLoading } = usePosts();

    if (isLoading) return <CircularProgress />;
    if (error) return <Typography color="error">An error occurred: {error.message}</Typography>;

    return (
        <Container>
            <Typography variant="h3" component="h1" gutterBottom>
                Posts
            </Typography>
            <PostList posts={data} />
        </Container>
    );
};

export default Posts;
