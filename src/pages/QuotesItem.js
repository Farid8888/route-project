import classes from './QuotesItem.module.css'
import { Fragment,useState,useContext } from 'react'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router'
import { QuotesContext } from '../useContext/context'


const QuotesItem =(props)=>{
    const filteredQuote = useContext(QuotesContext).filteredQuote
    const history = useHistory()
    const currentLink = history.location.pathname
console.log(filteredQuote)
    return(
        <Fragment>   
           <ul className={classes.quotesitem}>
        <li>
            <h3>{props.text}</h3>
            <p>{props.author}</p>
        </li>
        <Link to={currentLink + '/' +props.id}>
        <button type='button' >
            View Fullscreen
        </button>
        </Link>
       </ul>
        </Fragment>
       
    )
}

export default QuotesItem