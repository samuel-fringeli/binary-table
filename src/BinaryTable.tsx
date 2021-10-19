import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Box} from "@material-ui/core";

export default function BinaryTable(props: { numberCols: number, stateOn: string, stateOff: string }) {
    const { numberCols, stateOn, stateOff } = props;
    const cols = Array.from(Array(props.numberCols).keys());
    const rows = [];

    for (let i = 0; i < Math.pow(2, numberCols); i++) {
        const binaryNumberList = i.toString(2).split('').reverse();
        const tableCells = [];

        for (let j = numberCols -1; j >= 0; j--) {
            if (j >= binaryNumberList.length) {
                // state off
                tableCells.push(stateOff)
            } else {
                tableCells.push(binaryNumberList[j] === '1' ? stateOn : stateOff);
            }
        }

        rows.push(
            <TableRow key={'table_row_' + i}>
                {tableCells.map((tc, idx) => (
                    <TableCell key={'table_cell_' + idx}>{tc}</TableCell>
                ))}
                <TableCell>{i}</TableCell>
            </TableRow>
        );
    }

    return (
        <Box marginBottom={4}>
            <TableContainer>
                <Table style={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            {cols.map(k => (
                                <TableCell key={'table_cell_header_' + k}>Trigger&nbsp;{k + 1}</TableCell>
                            ))}
                            <TableCell>Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
