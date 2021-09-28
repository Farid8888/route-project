import classes from './Fullscreen.module.css'
import { QuotesContext } from '../useContext/context'
import {useContext,useEffect,Fragment} from 'react'
import { getFilteredQuotes } from '../api/api'
import {useParams,Route,useRouteMatch,Link} from 'react-router-dom'
import Comments from '../comments/Comments'
import {useHistory} from 'react-router'


const Fullscreen = (props)=>{
    const params =useParams()
    const match = useRouteMatch()
    const {quoteId} = params
    const history = useHistory()
    const filteredQuote = useContext(QuotesContext).filteredQuote
    const addFiltered = useContext(QuotesContext).addFilteredQuote
    useEffect(()=>{
            getFilteredQuotes(quoteId).then(value=>addFiltered(value))
    },[quoteId])
    console.log(quoteId)
    
    
    return(
        <Fragment>
            <div className={classes.fullScreen}> 
            <h3>{filteredQuote.text}</h3>
            <p>{filteredQuote.author}</p>
            </div>
            <Route path={`${match.url}`} exact>
            <Link to={`${match.url}/comments`}>
            <div className={classes.btn}> 
            <button type='button'>Load comments</button>
            </div>
            </Link>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments quoteId={quoteId}/>
            </Route>
           </Fragment>
    )
}

export default Fullscreen