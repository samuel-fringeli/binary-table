import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Grid, TextField} from "@material-ui/core";
import BinaryTable from './BinaryTable';

export default function App() {
    const [numberCols, setNumberCols] : [number, Function] = React.useState(4);
    const [stateOff, setStateOff] : [string, Function] = React.useState('0');
    const [stateOn, setStateOn] : [string, Function] = React.useState('1');

    return (
        <Container maxWidth="md">
            <Grid container>
                <Grid xs={12}>
                    <Box marginTop={2} marginBottom={2} fontWeight="bold">
                        <Typography variant="h4" component="h1" align="center">
                            Binary table
                        </Typography>
                    </Box>
                </Grid>
                <Grid sm={4}>
                    <Box margin={1}>
                        <TextField
                            label="Number of columns"
                            variant="outlined"
                            type="number"
                            fullWidth
                            defaultValue={4}
                            inputProps={{ min: 1 }}
                            onChange={e => setNumberCols(
                                isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value)
                            )}
                        />
                    </Box>
                </Grid>
                <Grid sm={4}>
                    <Box margin={1}>
                        <TextField
                            label="State ON"
                            variant="outlined"
                            fullWidth
                            defaultValue="1"
                            onChange={e => setStateOn(e.target.value)}
                        />
                    </Box>
                </Grid>
                <Grid sm={4}>
                    <Box margin={1}>
                        <TextField
                            label="State OFF"
                            variant="outlined"
                            fullWidth
                            defaultValue="0"
                            onChange={e => setStateOff(e.target.value)}
                        />
                    </Box>
                </Grid>
                <Grid xs={12}>
                    <Box marginTop={2}>
                        {numberCols > 0 && <BinaryTable numberCols={numberCols} stateOn={stateOn} stateOff={stateOff}/>}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
