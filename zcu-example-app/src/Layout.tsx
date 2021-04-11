import * as React from 'react'
import classes from '*.module.css'
import { AppBar, Toolbar, IconButton, Typography, Button, Paper, Grid } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    }
  }))

export default (props: any) => {
    const classes = useStyles()
    
    return <> 
        <AppBar position="static">
        <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
        <Typography variant="h6" className={classes.title}>
            Operations Console
        </Typography>
            <Typography>
              {new Date().toJSON().slice(0,10).replace(/-/g,'/')}
            </Typography>
        </Toolbar>
        </AppBar>
        <Paper elevation={3}>
          <Grid container>
              {props.children}
          </Grid>
        </Paper>
    </>
}
