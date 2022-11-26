import React, { FC } from 'react';
import './App.css';
import { Link, Route, Routes, useMatch, useNavigate } from 'react-router-dom';
import { IComment, ICommentData } from './types/interfaces';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';

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
        <p>{name}</p>
        <p>{email}</p>
        <p>{body}</p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    )
  }

  const Comment = ({ comment }: any) => {
    return (
      <div>
        <span>Nombre: </span>
        <span>{comment.name}</span>
        <div>
          <span>Email: </span>
          <span>{comment.email}</span>
        </div>
        <span>Comment: </span>
        <Link to={`/comments/${comment.id}`}>{comment.body}</Link>
      </div>
    )
  }

  const CommentsList = ({ comments }: any): JSX.Element => {
    return (
      <div>
        <h1>Comments</h1>
        <div>
          {comments?.map((comment: IComment) =>
            <Comment key={comment.id} comment={comment} />)}
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
