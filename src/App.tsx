import React, { FC } from 'react';
import './App.css';
import { Route, Routes, useMatch} from 'react-router-dom';
import { IComment, ICommentData } from './types/interfaces';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';
import CommentsList from './components/CommentsList';
import CommentDetail from './components/CommentDetail';

const App: FC = () => {
  const fetchData = async () => await axios.get("http://jsonplaceholder.typicode.com/posts/1/comments");

  const { data, isLoading, isError }: UseQueryResult<ICommentData, Error> = useQuery(["comments"], fetchData);

  const match = useMatch('/comments/:id')

  const comment: IComment | undefined | null = match
    ? data?.data?.find((comment: IComment) => comment.id === Number(match.params.id))
    : null

  const comments = data?.data?.map((comment: IComment) => comment)

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
