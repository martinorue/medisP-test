import React from 'react';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
import CommentIcon from '@mui/icons-material/Comment';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import formatString from '../utils/functions';
import Divider from '@mui/material/Divider';


const Comment = ({ comment }: any) => {
    return (
        <>
            <ListItem alignItems="flex-start">
                <Link to={`/comments/${comment.id}`}>
                    <IconButton aria-label="comment">
                        <CommentIcon />
                    </IconButton>
                </Link>
                <ListItemText
                    primary={comment.email}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {comment.name.length > 20 ? formatString(comment.name, 20) : comment.name}
                            </Typography>
                            — <Link to={`/comments/${comment.id}`}>{comment.body.length > 30 ? formatString(comment.body, 30) : comment.body}
                            </Link>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}

export default Comment