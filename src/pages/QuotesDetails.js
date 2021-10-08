import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  {id: 'q1',author:'max',text:'Learning React is Fun!'},
  {id: 'q2',author:'maxmilian',text:'Learning React is super Fun!'}
];

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote)=> quote.id === params.quoteId);

  if(!quote){
    return <p>Invalid Entry!!</p>
  }
  return (
    <Fragment>
      <HighlightedQuote author={quote.author} text={quote.text}/>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;