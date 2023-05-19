import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNewsletterStore } from '../../hooks';


export const TableListUserSubs = () => {


    const { listUser } = useSelector(state => state.newsletter);

    const { startListUserNewsletter } = useNewsletterStore();
    
    useEffect( ()=> {
        startListUserNewsletter();
        console.log(listUser)
    })

  return (
    <TableContainer component={Paper}>
        <Table sx={{minWidth: 500}}>
            <TableHead>
                <TableRow>
                    <TableCell align='center'>Nombre</TableCell>
                    <TableCell align='center'>Email</TableCell>
                    <TableCell align='center'>Subscribe</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    listUser.map(( user ) => (
                    <TableRow key={user.email}>
                        <TableCell align='center'>{user.name}</TableCell>
                        <TableCell align='center'>{user.email}</TableCell>
                        <TableCell align='center'>{user.issubcribe ? 'Subscrito': 'Desuscrito'}</TableCell>
                    </TableRow> 
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
  )
}
