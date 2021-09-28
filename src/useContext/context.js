import { createContext, useCallback, useState } from "react";

export const QuotesContext = createContext({
  quotes: [],
  filteredQuote: [],
  addFilteredQuote: (filt) => {},
  addQuotes: (quotes) => {},
  // concatQuotes: (quot) => {},
  changeCheck:()=>{},
  check: false,
  comments: [],
  addComments: (comments) => {},
  concatComments: (cmt) => {},
});

const QuotesContextProvider = (props) => {
  const [quotes, setQuotes] = useState([]);
  const [filteredQuote, setFilteredQuote] = useState([]);
  const [check, setCheck] = useState(false);
  const [comments, setComments] = useState([]);

  const addComments = (comments) => {
    setComments(comments);
  };

  const concatComments = (cmt) => {
    setComments((prevst) => {
      return prevst.concat(cmt);
    });
  };

  const addFilteredHandler = (filter) => {
    setFilteredQuote(filter);
  };

  const addQuotesHandler = useCallback((quotes) => {
    setQuotes(quotes);
  }, []);
  const concatQuotesHandler = useCallback((data) => {
    setQuotes((prevst) => {
      return prevst.concat(data);
    });
    setCheck(true);
  }, []);

  const changeCheck =useCallback(()=>{
    setCheck(prevst=>{
      return !prevst 
    })
  },[])
  return (
    <QuotesContext.Provider
      value={{
        quotes: quotes,
        addQuotes: addQuotesHandler,
        changeCheck: changeCheck,
        check: check,
        filteredQuote: filteredQuote,
        addFilteredQuote: addFilteredHandler,
        comments:comments,
        addComments:addComments,
        concatComments:concatComments
      }}
    >
      {props.children}
    </QuotesContext.Provider>
  );
};

export default QuotesContextProvider;
