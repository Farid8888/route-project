import classes from './CommentsList.module.css'
import CommentsItem from './CommentsItem'
import NewComment from './NewComment'
import { useState,Fragment,useContext } from 'react'
import { QuotesContext } from '../useContext/context'

const CommentsList = (props)=>{
    const comments = useContext(QuotesContext).comments
   const [form,setForm ] = useState(false)
   const formHandler =()=>{
       setForm(true)
   }

   let content = comments.map(comment=>{
       return <CommentsItem key={comment.comments} text={comment.comments}/>
   })
   if(comments.length<=0){
       content = <div className={classes.noComments}>
            No comments were added yet!
       </div>
   }
    return(
        <Fragment>
        <div className={classes.comments}>
       <div className={classes.addComments}>
           <h3>User Comments</h3>
          {!form && <button type='button' onClick={formHandler}>Add Comments</button>} 
       </div>
       </div> 
       {form &&<NewComment quoteId={props.quoteId}/> }
       {content}
       </Fragment>
    )
}

export default CommentsList