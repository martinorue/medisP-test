import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const CircularIndeterminate = () => {
    return (
        <div>
            <Box sx={{ display: 'flex', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <CircularProgress />
            <Box sx={{ m: 2 }}>
                loading...
            </Box>
            </Box>
        </div>
    );
}

export default CircularIndeterminate