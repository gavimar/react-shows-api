import React from 'react';

import '../stylesheets/App.scss';
import ShowList from './ShowList'
import {fetchShows}  from '../services/ReasonService';
import Loader from './Loader';
import { Switch,Route } from 'react-router-dom';
import ShowDetail from './ShowDetail'
import Input from './Input'
import InputRadio from './InputRadio'

class App extends React.Component {
  _isMounted = false;
  constructor(props) {
      super(props);
   
      this.state = {
        data:[],
        loading: true,
        input:'',
        showInfo:{
          id:''

        },
        checked : false
      }
      setTimeout(() => this.setState({loading: false}), 2000);
      this.fetchNewShows = this.fetchNewShows.bind(this);
      this.renderShowDetail = this.renderShowDetail.bind(this);
      this.handleShowInfo = this.handleShowInfo.bind(this);
      this.handleInputValue = this.handleInputValue.bind(this);
      this.fetchInputShows = this.fetchInputShows.bind(this);
      this.handleRadioButton = this.handleRadioButton.bind(this);
     
  }

  handleShowInfo(target) {
    this.setState((prevState) => {
      return (prevState.showInfo.id = target.id);
    });
  }
  

  // fetchInputShows() {
  //     const ENDPOINT = `http://api.tvmaze.com/shows`;

  //       fetch(ENDPOINT)
  //       .then(response => response.json())
  //       .then(data => {
  //         this.setState({
  //           data: data
  //         });
  //       });
  //   }
    fetchInputShows() {
      const ENDPOINT = `http://api.tvmaze.com/search/shows?q=${this.state.input}`;

        fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => {
          this.setState({
            data: data
          });
        });
    }

    
    fetchNewShows() {
      
      fetchShows()
        
        .then(data => {
          this.setState({
            data: data
          });
        });
    }


componentDidMount(){
  this._isMounted = true;
  this.fetchNewShows();
  console.log(this.state)
  
}

componentDidUpdate(){
  console.log(this.state)
  
}

renderShowDetail(props){
  console.log(props)
  const urlId = props.match.params.id;
  const shows = this.state.data;
  for(let showObj of shows) {
    if(showObj.show.id === parseInt(urlId)) {
      return <ShowDetail show={showObj}/>
    }
  }
}

// renderShowDetail(){

//   const urlId = this.state.showInfo.id;
//   const shows = this.state.data;
//   for(let showObj of shows) {
//     if(showObj.show.id === parseInt(urlId)) {
//       console.log(showObj)
//       console.log(urlId)
//       return <ShowDetail show={showObj}/>
//     }
//   }
// }

handleInputValue = (target) =>{
  this.setState((prevState) =>{
      return(prevState.input = target)
  })
}

handleRadioButton = () =>{
  this.setState((prevState) =>{
    return(prevState.checked = !prevState.checked)
})

}

// paintRunningShows = () =>{
//   const shows = this.state.data;
//   if (this.state.checked === true){
//     for (showObj of shows){
//       if (showObj.show.status === "Ended"){

//       }
//     }

//   }
// }


render() {
  const {data,checked} = this.state;
  console.log(data)
  return (
    <div className="wrapper">
    <Switch>
    <Route exact path="/">
      <h1>Shows finder</h1>
      <Input type="text"
                     name="name"
                     checked = ""
                     
                     handleInputValue={this.handleInputValue}
                     fetchInputShows = {this.fetchInputShows}
              />
               
              <InputRadio type="radio"
                     name="running"
                     id="running"
                     checked = {this.state.checked}
                     handleRadioButton = {this.handleRadioButton}
                     handleInputValue={this.handleInputValue}
                     fetchInputShows = {this.fetchInputShows}
                     labelName="Running shows"
              />
      {this.state.loading ? (
          <Loader />
        ) : (
    <ShowList checked={checked} 
    data = {data}
    handleShowInfo= {this.handleShowInfo}/>
        )}
       
    </Route>
    <Route path="/Show/:id" render={this.renderShowDetail}/>
    </Switch>
    </div> 
  );
}
}

export default App;
