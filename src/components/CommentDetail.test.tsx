import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { IComment } from '../types/interfaces'
import { BrowserRouter as Router } from 'react-router-dom'
import CommentDetail from './CommentDetail'

test('comment detail', () => {
    const comment: IComment = {
        name: 'test',
        email: 'testComment@test.com',
        body: 'comentario para testear'
    }

    render(
        <Router>
            <CommentDetail name={comment?.name} email={comment?.email} body={comment?.body} id={comment?.id} />
        </Router>
    )

    const element = screen.getByText('"comentario para testear"')
    expect(element).toBeDefined()
})