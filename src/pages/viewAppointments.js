import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 500,
    },
});


const ViewAppointments = () => {
    const classes = useStyles();
    const [appointments, setAppointments] = useState([]);

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const fetchData = async () => {
        const { data } = await axios.get(`http://localhost:5000/api/appointments/${userInfo.id}`);
        setAppointments(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ViewWrapper>
            <ViewContainer>
                <p className='table-title'> All Appointments </p>

                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell> Purpose</StyledTableCell>
                                <StyledTableCell> Appointment Date </StyledTableCell>
                                <StyledTableCell> Appointment Time </StyledTableCell>
                            </TableRow>
                        </TableHead>

                        {appointments?.map((appointment => {
                            return (
                                <TableBody key={appointment._id}>
                                    <StyledTableRow >
                                        <StyledTableCell> {appointment.purpose}</StyledTableCell>
                                        <StyledTableCell> {appointment.date}</StyledTableCell>
                                        <StyledTableCell> {appointment.time}</StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            )
                        }))}
                    </Table>
                </TableContainer>
            </ViewContainer>
        </ViewWrapper>
    );
}

export default ViewAppointments;

const ViewWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const ViewContainer = styled.div`
    display: flex;
    flex-direction: column;

    background: #ffff;

    width: fit-content;
    height: fit-content;

    border-radius: 8px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    padding: 1rem;

    gap: 20px;

    .table-title{
        font-size: 24px;
        margin: 0;
    }
`;