import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ControlledExpansionPanels from './Expansion';
import { Button } from '@material-ui/core';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone'
  


 const cars = !!localStorage.getItem('cars')?JSON.parse(localStorage.getItem('cars')):[];
 class ItemCard extends Component{
   state ={
    visible: true
   }
      
  remove=()=>
      {
        
       cars.forEach(element => {
        if(element.id===this.props.car.id)
        {        
         let index = cars.indexOf(element);
         cars.splice(index,1);
         this.setState({
           visible: false
         })
      
         localStorage.setItem('cars',JSON.stringify(cars));
        }
      });
    }

    render(){
      const { classes } = this.props;
      const {car} = this.props;
       
    return (
      <div>
        {this.state.visible?
        <Card className={classes.card}>
        <Button className={classes.button} style={{float: 'right'}} onClick={this.remove}>
            <DeleteTwoToneIcon/>     
          </Button>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              className={classes.media}
              image={car.urlString}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {car.manufacturer} {car.model}   
              </Typography>
              <Typography component="p">    
              {car.params.map(value => (
                <li key={value}>{value}</li>
                ))}   
              </Typography>
            </CardContent>     
          <ControlledExpansionPanels description={car.description}/>     
        </Card>   
        : null}
      </div> 
  );
}}

ItemCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {
  card: {
    width: "60%",
    margin: 'auto',
    marginTop: '30px'
  },
  media: {
    height: '60%',
  },
};

export default withStyles(styles)(ItemCard);