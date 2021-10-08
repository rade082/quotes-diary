import {Route,Switch,Redirect} from 'react-router-dom'; 
import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import NewQuotes from './pages/NewQuotes';
import NotFound from './pages/NotFound';
import QuotesDetails from './pages/QuotesDetails';

function App() {
  return (
    <Layout>
   <Switch>
     <Route path='/' exact>
          <Redirect to='/quotes'/>
     </Route>  
     <Route path='/quotes' exact>
        <AllQuotes/>
     </Route>
     <Route path='/quotes/:quoteId'>
        <QuotesDetails/>
     </Route>
     <Route path='/new-quote'>
         <NewQuotes/>
     </Route>
     <Route path='*'> 
         <NotFound/>
     </Route>
   </Switch>
   </Layout>
  );
}

export default App;
