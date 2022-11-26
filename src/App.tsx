import React, { FC } from 'react';
import './App.css';
import { Link, Route, Routes, useMatch, useNavigate } from 'react-router-dom';
import { IComment, ICommentData } from './types/interfaces';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';
import formatString from './utils/functions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const App: FC = () => {
  const fetchData = async () => await axios.get("http://jsonplaceholder.typicode.com/posts/1/comments");

  const { data, isLoading, isError }: UseQueryResult<ICommentData, Error> = useQuery(["comments"], fetchData);

  const match = useMatch('/comments/:id')

  const comment: IComment | undefined | null = match
    ? data?.data?.find((comment: IComment) => comment.id === Number(match.params.id))
    : null

  const comments = data?.data?.map((comment: IComment) => comment)

  const CommentDetail = ({ id, name, email, body }: IComment): JSX.Element => {
    const navigate = useNavigate();
    return (
      <div>
        <Typography component={'div'} align='center' variant='h4'>
          <p>{`"${body}"`}</p>
        </Typography>
        <Typography align='center' variant='h6'>
          <p>{name} — {email}</p>
        </Typography>
        <Box textAlign='center'>
          <Button variant="outlined" color='secondary' onClick={() => navigate(-1)}>Go back</Button>
        </Box>
      </div>
    )
  }

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

  const CommentsList = ({ comments }: any): JSX.Element => {
    return (
      <div>
        <Typography component={'div'} variant='h4' align='center'>
          <header>Comments</header>
        </Typography>
        <div className='comments-container'>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            {comments?.map((comment: IComment) =>
              <Comment key={comment.id} comment={comment} />)}
          </List>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<CommentsList comments={comments} />} />
        <Route path="/comments" element={<CommentsList comments={comments} />} />
        <Route path="/comments/:id" element={<CommentDetail name={comment?.name} email={comment?.email} body={comment?.body} id={comment?.id} />} />
      </Routes>
    </div>
  );
}

export default App;
