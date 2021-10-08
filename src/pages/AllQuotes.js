import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {id: 'q1',author:'max',text:'Learning React is Fun!'},
    {id: 'q2',author:'maxmilian',text:'Learning React is super Fun!'}
]

const AllQuotes = () => {
    return (<QuoteList quotes={DUMMY_QUOTES}/> )
};

export default AllQuotes;