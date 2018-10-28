import React from "react";
import ItemsList from "./ItemsList.jsx"

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = props.history
    };

render()
   {
       return(
            <div className="listContainer">
                 <ItemsList data={this.state} />
            </div>      
       );
   }
}
    

export default Home;