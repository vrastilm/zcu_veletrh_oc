import * as React from 'react'
import { makeStyles, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Grid } from '@material-ui/core'
import SpeedIcon from '@material-ui/icons/Speed'
import { observer } from 'mobx-react-lite'

export interface SpeedCardProps {
    name: string
    description:  string
    update: () => void
    data: number
}

const useStyles = makeStyles({
    root: {
      maxWidth: 350,
      marginTop: '25px',
      marginBottom: '25px'
    },
    grid: {
        marginTop: '25px'
    },
    icon: {
        fontSize: '60px'
    },
    flexCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
  })

export default observer((props: SpeedCardProps) => {
    const classes = useStyles()

    return <>
        <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
          <Grid className={classes.grid} container>
            <Grid item xs={6}>
                <SpeedIcon className={classes.icon}/>
            </Grid>
            <Grid item className={classes.flexCenter} xs={6}>
                <Typography variant='h6'>{props.data}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={props.update}>
          Update
        </Button>
      </CardActions>
    </Card>
    </>
})