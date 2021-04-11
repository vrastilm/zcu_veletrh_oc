import * as React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import SpeedCard from './SpeedCard'
import { observer } from "mobx-react-lite"
import FillerSpeedState from './FillerSpeedState'

const useStyles = makeStyles({
    flexCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    typography: {
        margin: '25px'
    }
  })

export default observer(() => {
    const classes = useStyles()
    const [state] = React.useState(() => new FillerSpeedState())

    return <>
        <Grid item xs={12}>
            <Typography 
                className={classes.typography} 
                variant='h4'>
                    Machine dashboard
            </Typography>
        </Grid>
        <Grid className={classes.flexCenter} item xs={12} md={6}>
            <SpeedCard 
                name='Actual filler speed' 
                description='Show actual filler machine speed.' 
                update={() => {}} 
                data={state.speed}
            />
        </Grid>
        <Grid item className={classes.flexCenter} xs={12} md={6}>
        <SpeedCard 
                name='Average filler speed' 
                description='Show average filler machine speed.' 
                update={() => {}} 
                data={state.speed}    
            />
        </Grid>
    </>
})