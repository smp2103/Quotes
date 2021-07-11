import QuoteForm from '../quotes/QuoteForm'
import { useHistory } from 'react-router'
import useHttp from '../../hooks/use-http'
import { addQuote } from '../../lib/api'
import { useEffect } from 'react'
const NewQuote = () => {
    const {sendRequest,status} = useHttp(addQuote);

    const history = useHistory();

    useEffect(()=>{
        if(status === "completed"){
            history.push('/quotes') // 뒤로가기 가능 replace 는 redirect
        }
    },[status,history]);

    const addQuoteHandler = quoteData => {
        sendRequest(quoteData)
        
    }

    return (
        <QuoteForm isLoading={status==='pending'} onAddQuote ={addQuoteHandler}></QuoteForm>
    )
}

export default NewQuote;