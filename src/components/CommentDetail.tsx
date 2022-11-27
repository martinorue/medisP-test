import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { IComment } from "../types/interfaces";

const CommentDetail = ({ id, name, email, body }: IComment): JSX.Element => {
    const navigate = useNavigate();
    if (body) {
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
    else {
        return (
            <></>
        )
    }
}

export default CommentDetail