import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import { IComment } from "../types/IComment"
import Comment from './Comment'

export interface Props {
    comments: Array<{
        postId?: number;
        id?: number;
        name?: string;
        email?: string;
        body?: string;
    }>
}

const CommentsList = ({ comments }: Props): JSX.Element => {
    return (
        <div>
            <Typography component={'div'} variant='h4' align='center'>
                <header>Comments</header>
            </Typography>
            <div className='comments-container'>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {comments?.map((comment: IComment) =>
                        <Comment key={comment.id} id={comment.id} name={comment?.name}
                            email={comment?.email} body={comment?.body} />)}
                </List>
            </div>
        </div>
    )
}

export default CommentsList