import React from 'react'
import {connect} from 'react-redux';
import {Container, Typography} from '@material-ui/core';

const Alert = ({alerts}) => {
    return (
       alerts && alerts !== null && alerts.length > 0 && alerts.map(alert =>(
            <Container key={alert.id} style={{marginTop:'10px',borderRadius:'10px',background:'white',padding:'10px'}} >
            <Typography variant="h5">
            {alert.msg}
            </Typography>
            </Container>
        )) 
    )
}

const mapStateToProps = state => ({
    alerts: state.alert
})

export default connect(mapStateToProps)(Alert);
