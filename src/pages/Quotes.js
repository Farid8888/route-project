import classes from "./Quotes.module.css";
import React, { useContext, Fragment, useState } from "react";
import QuotesItem from "./QuotesItem";
import { QuotesContext } from "../useContext/context";
import { useHistory } from "react-router";



const Quotes = React.memo(() => {
  const quotes = useContext(QuotesContext).quotes;
  const check = useContext(QuotesContext).check;
  const history = useHistory();
  const [buttonChange, setButtonChange] = useState(false);
  const mapquotes = quotes.map((q, i) => {
    return { index: i, quote: q };
  });
  let sortedquotes = mapquotes.sort(function (a, b) {
    if (b.index > a.index) {
      return 1;
    }
    if (b.index < a.index) {
      return -1;
    }
    return 0;
  });
  let result = sortedquotes.map((quote) => {
    return quotes[quote.index];
  });
  const changeHandler = () => {
    setButtonChange((prevst) => {
      return !prevst;
    });
    history.push(history.location.pathname + '?sort=' + `${buttonChange ? 'desc' : 'asc'}`)
  };
  console.log(history);
  if (buttonChange) {
    sortedquotes = mapquotes.sort(function (a, b) {
      if (a.index > b.index) {
        return 1;
      }
      if (a.index < b.index) {
        return -1;
      }
      return 0;
    });
    result = sortedquotes.map((quote) => {
      return quotes[quote.index];
    });
    
  }
  console.log(mapquotes);

  let content;
  if (!check) {
    content = result.map((quote) => {
      return (
        <QuotesItem
          key={quote.id}
          text={quote.text}
          author={quote.author}
          id={quote.id}
        />
      );
    });
  } else {
    content = result.map((quote) => {
      return (
        <QuotesItem
          key={quote.text}
          text={quote.text}
          author={quote.author}
          id={quote.id}
        />
      );
    });
  }

  const redirectHandler =()=>{
   history.replace('/new-quote')
  }
  return (
    <Fragment>
      {quotes.length > 0 ? (
        <section className={classes.quotes}>
          <div className={classes.btn}>
            <button onClick={changeHandler}>
              {buttonChange ? "Sort Descending" : "Sort Acsending"}
            </button>
          </div>
          {content}
        </section>
      ) : (
        <div className={classes.noQuotes}>
          <h1>No quotes found</h1>
          <button type='button' onClick={redirectHandler}>Add a quote</button>
        </div>
      )}
    </Fragment>
  );
});

export default Quotes;
