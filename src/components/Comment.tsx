import React from 'react';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
import CommentIcon from '@mui/icons-material/Comment';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import formatString from '../utils/functions';
import Divider from '@mui/material/Divider';
import { IComment } from '../types/IComment';


const Comment = ( {postId, id, name, email, body} : IComment) => {
    return (
        <>
            <ListItem alignItems="flex-start">
                <Link to={`/comments/${id}`}>
                    <IconButton aria-label="comment">
                        <CommentIcon />
                    </IconButton>
                </Link>
                <ListItemText
                    primary={email}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {name && name.length > 20 ? formatString(name, 20) : name}
                            </Typography>
                            — <Link to={`/comments/${id}`}>{body && body.length > 30 ? formatString(body, 30) : body}
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