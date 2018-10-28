import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ItemCard from './ItemCard';
import 'typeface-roboto'

const defValues = {
  id: 0,
  manufacturer: "mazda",
  model: "M3",
  urlString:"http://mazdadb.com/images/960/02_2_OVERVIEW_Feature_LHD_Mazda_3.jpg",
  description: "lorem",
  params: [
    "точное рулевое управление с помощью технологии G-Vectoring Contro",
    "Яркий дизайн",
    "Среднее значение для Mazda3 SKYACTIV SDN / HB 1,5 АТ",
    "Максимальная скорость:  189/185 км/час",
    "Расход топлива: 5,2 л/100 км",
    "Системы активной безопасности i-Activsense"  
]
};



 
const Cars = !!localStorage.getItem('cars')?JSON.parse(localStorage.getItem('cars')):[defValues];

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

 
class MainGrid extends React.Component { 
  constructor(){
    super();
    this.state = {
      spacing: '32',
      cars:[],
      perPage: 2,
      scrolling: false,
      amount: 1,
      item: 0
    };
  }
  
  componentWillMount(){
    this.scrollListener = window.addEventListener('scroll', e=>{
      this.handleScroll(e);
    })
    this.initialLoadCars();
    this.setState({
      amount :Cars.length
    })
  }


    handleScroll = (e) => {
      const { scrolling, item} = this.state
      const amount = Cars.length
      if (scrolling) return
      if (amount <= item) return
      var pageOffset = window.pageYOffset + window.innerHeight
      if (pageOffset > document.documentElement.scrollHeight) {
        this.loadMore()
      }
    }


    loadMore()
    {
      this.setState({
        scrolling:true
      });
      this.loadCars();
    }

    initialLoadCars()
    {
      let {item} = this.state
      this.state.cars.push(Cars[item])    
      if(++item<Cars.length)
      this.state.cars.push(Cars[item])   
      this.setState({
        item: item+1,
        scrolling: false
      })
    
    }

    loadCars()
    { 
      let {item} = this.state;
      if(item<=Cars.length)
      {
      this.state.cars.push(Cars[item])
      this.setState({
        item: item+1,
        scrolling: false
      })
    }
    }



  render() {
    const { classes } = this.props;
    const { spacing } = this.state;


    return (
        <div style={{marginTop: '80px'}}>
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid className="CardsContainer" container spacing={40} className={classes.demo}  justify="center" spacing={Number(spacing)}>                                               
              {this.state.cars.map(value => (
               <ItemCard key={value.id} car={value} />
              ))}

          </Grid>
        </Grid>      
      </Grid>
      </div>
    );
  }
}

MainGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainGrid);