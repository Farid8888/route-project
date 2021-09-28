import {Route,Redirect,Switch} from 'react-router-dom'
import PageNotFound from './pages/PageNotFound';
import Layout from './Layout/Layout';
import Quotes from './pages/Quotes';
import Fullscreen from './pages/Fullscreen';
import NewQuote from './pages/NewQuote';
import {useContext,useEffect} from 'react'
import {QuotesContext} from './useContext/context'
import {fetchQuotesData} from './api/api'

function App() {
  const addQuotes = useContext(QuotesContext).addQuotes
  const check = useContext(QuotesContext).check
  const quotes = useContext(QuotesContext).quotes
  useEffect(()=>{
    setTimeout(()=>{
      fetchQuotesData().then(value=>addQuotes(value))
    },300)
    
},[check])
 
console.log(check)
console.log(quotes)
  return (
    <div>
      <Layout/>
      <Switch>
      <Route path='/quotes/:quoteId'>
            <Fullscreen />
          </Route>  
      <Redirect from='/' to='/quotes' exact/>
      <Route path='/quotes' exact>
        <Quotes/>
        </Route>
        <Route path='/new-quote'>
          <NewQuote/>
        </Route>
      {/* <Route path='*'>
        <PageNotFound/>
      </Route> */}
      
      </Switch>
    </div>
  );
}

export default App;
