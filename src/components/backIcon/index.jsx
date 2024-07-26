import { IconButton } from '@mui/material'
import React from 'react'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useNavigate } from 'react-router-dom';

export default function BackIcon({handleModal}) {

    const navigate = useNavigate()

    return (
        <div onClick={handleModal ? handleModal : () => navigate(-1)}>
            <IconButton>
                <ArrowBackOutlinedIcon/>
            </IconButton>
        </div>
    )
}
