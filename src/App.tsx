import React, { FC } from 'react';
import './App.css';
import { Route, Routes, useMatch } from 'react-router-dom';
import { IComment } from './types/IComment';
import { useQuery } from '@tanstack/react-query';
import CommentsList from './components/CommentsList';
import CommentDetail from './components/CommentDetail';
import fetchData from './services/comments';
import CircularIndeterminate from './utils/CircularIndeterminate';


const App: FC = () => {

  const { data, isLoading, isError, error } = useQuery(["comments"], fetchData);

  const match = useMatch('/comments/:id')

  const comment: IComment | undefined | null = match
    ? data?.find((comment: IComment) => comment.id === Number(match.params.id))
    : null

  if (isError && error instanceof Error) {
    return <p>Error: {error.message}</p>
  }

  if (isLoading) {
    return (<CircularIndeterminate />)
  } else {
    return (
      <div>
        <Routes>
          <Route path="/" element={<CommentsList comments={data} />} />
          <Route path="/comments" element={<CommentsList comments={data} />} />
          <Route path="/comments/:id" element={<CommentDetail name={comment?.name} email={comment?.email} body={comment?.body} id={comment?.id} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
