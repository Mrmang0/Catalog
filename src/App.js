import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.jsx'

import Navigation from './components/Navigation';
import 'typeface-roboto'


const defValues = {
  id: 0,
  manufacturer: "mazda",
  model: "M3",
  urlString:"http://mazdadb.com/images/960/02_2_OVERVIEW_Feature_LHD_Mazda_3.jpg",
  description: `Только хорошее настроение и драйв! Вот, что Вас ждет за рулем Mazda3. 
  Концепция дизайна «KODO - душа движения» добавляет дерзости и агрессивности внешности Mazda3. Именно лаконичный стиль и соблюдение японских традиций отсечения всего лишнего придают автомобилю элегантности и подчеркивают решительный характер.
  Под изысканным дизайном экстерьера Mazda3 скрыты технологии, такие как G-Vectoring Control (GVC), расширенный пакет систем безопасности I-ACTIVSENSE и информационно-развлекательная система MZDConnect, которые делают Вашу поездку более безопасной и комфортной.Mazda3 - для тех, кто ценит яркие впечатления и драйв! `,
  params: [
    "точное рулевое управление с помощью технологии G-Vectoring Contro",
    "Яркий дизайн",
    "Среднее значение для Mazda3 SKYACTIV SDN / HB 1,5 АТ",
    "Максимальная скорость:  189/185 км/час",
    "Расход топлива: 5,2 л/100 км",
    "Системы активной безопасности i-Activsense"  
]
};





class App extends Component {

  componentWillMount()
  {
    if(!localStorage.getItem('cars'))
    {
      let cars =[]
      for (let index = 0; index <= 10; index++) {
        let tmp = Object.assign({},defValues);
        tmp.id = index;
        cars.push(tmp);
        console.log(cars[index]);
      }
     localStorage.setItem('cars',JSON.stringify(cars))
    }
  }

  render() {
    return (
      <div>      
        <Navigation/>
        <Home/>      
     </div>
    );
  }
}

export default App;
