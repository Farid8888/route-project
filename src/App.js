import {Route,Redirect,Switch} from 'react-router-dom'
import PageNotFound from './pages/PageNotFound';
import Layout from './Layout/Layout';
import Quotes from './pages/Quotes';
import Fullscreen from './pages/Fullscreen';
import NewQuote from './pages/NewQuote';
import { fetchQuotesData } from './api/api';
import useHttp from './useHook/useHttp';
import {useEffect} from 'react'

function App() {
  const {sendRequest,data} = useHttp(fetchQuotesData)
useEffect(()=>{
sendRequest()
},[sendRequest])
console.log(data)
  return (
    <div>
      <Layout/>
      <Switch>
      <Route path='/quotes/:quoteId'>
            <Fullscreen checkData={data}/>
          </Route>  
      <Redirect from='/' to='/quotes' exact/>
      <Route path='/quotes' exact>
        <Quotes />
        </Route>
        <Route path='/new-quote'>
          <NewQuote/>
        </Route>
      <Route path='*'>
        <PageNotFound/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
