import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Restaurants from './pages/Restaurants';
import RestaurantDetails from './pages/RestaurantDetails';
import RestaurantDetailsInfos from './components/RestaurantDetailsInfos';
import RestaurantDetailsImages from './components/RestaurantDetailsImages';
import RestaurantDetailsReviews from './components/RestaurantDetailsReviews';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
   
      
      <Router>
			<div className="app">
     
				<Switch>
        <Route exact path="/">
           <Login/>
					</Route>
        <Route exact path="/signup">
           <Register/>
					</Route>
         
					<Route exact path="/acceuil">
          <NavBar/> 
           <Restaurants/>
					</Route>
					<Route exact path="/restaurant">
          <NavBar/> 
            <RestaurantDetails/>
            <RestaurantDetailsInfos/>
           
         
					</Route>
          
           <Route exact  path="/restaurant/avis">
           <NavBar/> 
          <RestaurantDetails/>
          <RestaurantDetailsReviews/>
         
           </Route>
				
           <Route exact  path="/restaurant/photos">
           <NavBar/> 
          <RestaurantDetails/>
          <RestaurantDetailsImages/>
          
           </Route>
				
        
				
				</Switch>
			</div>
		</Router>

  );
}

export default App;
