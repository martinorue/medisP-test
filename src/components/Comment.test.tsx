import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { IComment } from '../types/IComment'
import Comment from './Comment'
import { BrowserRouter as Router } from 'react-router-dom'

test('comment content', () => {
    const comment: IComment = {
        name: 'test',
        email: 'testComment@test.com',
        body: 'comentario para testear'
    }

    render(
        <Router>
            <Comment name={comment.name} email={comment.email} body={comment.body} />
        </Router>
    )

    const element = screen.getByText('comentario para testear')
    expect(element).toBeDefined()
})