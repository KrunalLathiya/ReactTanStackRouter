// src/components/PostList.jsx

import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from '@tanstack/react-router';

const PostList = ({ posts }) => (
    <List>
        {posts.map(post => (
            <ListItem key={post.id}>
                <ListItemText>
                    <Link to={`/posts/${post.id}`} style={{ textDecoration: 'none' }}>
                        {post.title}
                    </Link>
                </ListItemText>
            </ListItem>
        ))}
    </List>
);

export default PostList;
