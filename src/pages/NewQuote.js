import classes from './NewQuote.module.css'
import Card from '../UI/Card'
import React,{useContext,useRef} from 'react'
import {useHistory} from 'react-router'
import { sendQuotesData,fetchQuotesData } from '../api/api' 
import { QuotesContext } from '../useContext/context' 
import { useEffect } from 'react'

const NewQuote =React.memo(()=>{
  const concatQuotes = useContext(QuotesContext).concatQuotes
  const changeCheck = useContext(QuotesContext).changeCheck
  const textInputRef = useRef()
  const authorInputRef = useRef()
const history =useHistory()

    const onSubmitHandler =(event)=>{
     event.preventDefault()
     const data={
        text:textInputRef.current.value,
        author:authorInputRef.current.value
    }
     sendQuotesData(data)
    //   concatQuotes(data)
    changeCheck()
     history.push('/quotes')
    }
    
    return(
        <Card>
        <form className={classes.form} onSubmit={onSubmitHandler}>
           <div className={classes.control}>
               <label htmlFor='author'>Author</label>
               <input id='author' type='text' ref={textInputRef}/>
           </div>
           <div className={classes.control}>
               <label htmlFor='text'>Text</label>
               <textarea id='text' rows='5' type='text' ref={authorInputRef} />
           </div>
           <div className={classes.btn}>
               <button type='submit'>Add Quote</button>
           </div>
        </form>
        </Card>
    )
})

export default NewQuote