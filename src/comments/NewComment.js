import classes from './NewComment.module.css'
import { sendCommentsData } from '../api/api'
import {useRef,useContext} from 'react'
import { QuotesContext } from '../useContext/context'

const NewComment =(props)=>{
    const inputRef = useRef()
    const concatComments = useContext(QuotesContext).concatComments
    const quotes = useContext(QuotesContext).quotes
    const submitHandler=(event)=>{
        event.preventDefault()
        const data={
            comments:inputRef.current.value,
            quoteId:props.quoteId
        }
       sendCommentsData(data)
       concatComments(data)
    }
    return(
       <form className={classes.form} onSubmit={submitHandler}>
           <label htmlFor='new-comment'>Your Comment</label>
           <textarea id='new-comment' type='text' rows='5' ref={inputRef}/>
           <div className={classes.btn}>
               <button type='submit'>Add Comment</button>
           </div>
       </form>
    )
}

export default NewComment