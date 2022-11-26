import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import { IComment } from "../types/interfaces"
import Comment from './Comment'



const CommentsList = ({ comments }: any): JSX.Element => {
    return (
        <div>
            <Typography component={'div'} variant='h4' align='center'>
                <header>Comments</header>
            </Typography>
            <div className='comments-container'>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {comments?.map((comment: IComment) =>
                        <Comment key={comment.id} comment={comment} />)}
                </List>
            </div>
        </div>
    )
}

export default CommentsList