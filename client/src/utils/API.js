import axios from "axios"

const BASEURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=';
const STARTDATE = '?begin_date='
const ENDDATE = '?end_date='
const APIKEY = '&api-key=e7e8a372d2fd437da15685dc57c44431'

// Export an object with a "search" method that searches the NYTimes API for the passed query

export default {
    search: function(query, queryStartDate, queryEndDate) {
        return axios.get(BASEURL + query + STARTDATE + queryStartDate + ENDDATE + queryEndDate + APIKEY);
    }
};
