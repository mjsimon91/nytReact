import axios from "axios"

const BASEURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=';
const STARTDATE = '?begin_date='
const ENDDATE = '?end_date='
const APIKEY = '&api-key=e7e8a372d2fd437da15685dc57c44431'


export default {

    // Export an object with a "search" method that searches the NYTimes API for the passed query
    search: function(query, queryStartDate, queryEndDate) {
        return axios.get(BASEURL + query + STARTDATE + queryStartDate + ENDDATE + queryEndDate + APIKEY);
    },

    //Get all books
    getArticles: function() {
        return axios.get("/api/articles")
    },

    //Get all articles with a given id
    getArticle: function(id){
        return axios.get("/api/articles/" + id)
    },

    // remove an article from the saved list
    deleteArticle: function(id){
        return axios.delete('/api/articles/' + id)
    },

    //Save an article to the database
    saveArticle: function(articleData){
        return axios.post('/api/articles', articleData)
    }
};
