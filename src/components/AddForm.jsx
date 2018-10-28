import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from  '@material-ui/core/Button';
import { Paper } from '@material-ui/core';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

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



class AddForm extends React.Component {
  state = {
    id: 0,
    manufacturer: '',
    model: '',
    description: '',
    urlString: '',
    params: []
  };


  onClickHanle = ()=>{
      const cars = !!localStorage.getItem('cars')?JSON.parse(localStorage.getItem('cars')):[defValues];
      const car = this.state;

      let valid = true;
      car.id = (cars.length===0)?0:cars[cars.length-1].id+1;
      Object.values(car).forEach(item =>{
        if(item.length === 0)
          {
            valid= false
          }
      })

      if(valid)
      {      
        car.params = this.state.params.split('\n')
        console.log(cars)
        cars.push(car);
        localStorage.setItem('cars',JSON.stringify(cars))
      }
      else
      alert('Заполены не все поля')

      
      console.log(localStorage.getItem(cars));
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
      <Grid container item xs={10} style={{margin: 'auto', marginTop: 25}} spacing={24}>
        <Paper style={{padding: 20, width: '100%'}}>
            <TextField
                id="outlined-full-width"
                label="Производитель"
                fullWidth
                style={{margin: 8}}
                margin="normal"
                variant="outlined"
                value={this.state.manufacturer}
                onChange={this.handleChange('manufacturer')}
                InputLabelProps={{
                    shrink: true,
                }}
                />

                <TextField
                id="outlined-full-width"
                label="Модель"
                fullWidth
                style={{margin: 8}}
                margin="normal"
                variant="outlined"
                value={this.state.model}
                onChange={this.handleChange('model')}
                
                InputLabelProps={{
                    shrink: true,
                }}
                />

                <TextField
                id="outlined-full-width"
                label="Ссылка на изображение"
                fullWidth
                style={{margin: 8}}
                margin="normal"
                variant="outlined"
                value={this.state.urlString}
                onChange={this.handleChange('urlString')}
                InputLabelProps={{
                    shrink: true,
                }}
                />

                <TextField
                    id="outlined-multiline-description"
                    label="Описание"
                    multiline
                    rowsMax="10"
                    
                    value={this.state.description}
                    onChange={this.handleChange('description')}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                />

                 <TextField
                    id="outlined-multiline-param"
                    label="Преимущества"
                    multiline
                    rowsMax="10"
                    onChange={this.handleChange('params')}
                    className={classes.textField}
                    margin="normal"

                    variant="outlined"
                    fullWidth
                />
                
                <Button variant="outlined" color="primary" className={classes.button} style={{margin:'8px'}} onClick={this.onClickHanle} type="submit">
                    Добавить автомобиль
                </Button>

        </Paper>
        
      </Grid>
    
             
      </form>
    );
  }
}

AddForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddForm);