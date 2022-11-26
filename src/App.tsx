import React, { FC } from 'react';
import './App.css';
import { Link, Route, BrowserRouter as Router, Routes, useMatch } from 'react-router-dom';
import { IComment, ICommentData } from './types/interfaces';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';

const App: FC = () => {
  const fetchData = async () => await axios.get("http://jsonplaceholder.typicode.com/posts/1/comments");

  const { data, isLoading, isError }: UseQueryResult<ICommentData, Error> = useQuery(["comments"], fetchData);


  const comments = data?.data?.map((comment: IComment) => comment)

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
      <Router>
        <Routes>
          <Route path="/" element={<CommentsList comments={comments} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
