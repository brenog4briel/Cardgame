import { IconButton } from '@mui/material'
import React from 'react'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useNavigate } from 'react-router-dom';
import styles from "./backicon.module.css"

export default function BackIcon() {

    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(-1)} className={styles.container}>
            <IconButton>
                <ArrowBackOutlinedIcon/>
            </IconButton>
        </div>
    )
}
