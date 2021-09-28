import CommentsList from "./CommentsList"
import { fetchCommentsData } from "../api/api"
import {useEffect,useContext} from 'react'
import { QuotesContext } from "../useContext/context"


const Comments =(props)=>{
    
    const addComments = useContext(QuotesContext).addComments
    useEffect(()=>{
        fetchCommentsData(props.quoteId).then(value=>addComments(value))
    },[])
    return(
    <CommentsList quoteId={props.quoteId}/>
    )
}

export default Comments