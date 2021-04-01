<template>
  <div>
    <b-container fluid>
    <h1>Top Rated Movies</h1>
  <b-row>
  
   <MovieCard v-for="(item,index) in fitler_items" :key="index" :item="item" />
  </b-row>
   <b-pagination
      v-model="top_current"
      :total-rows="top_rated_movies.length"
      :per-page="per_page"
      aria-controls="my-table"
      @input="paginate(top_current,top_rated_movies,'top_rated')"
    ></b-pagination>
      <h1>upcoming Movies</h1>
    <b-row> 
   <MovieCard v-for="(item,index) in upcoming_fitler_movies" :key="index" :item="item" /></b-row>  <b-pagination
      v-model="upcoming_current"
      :total-rows="upcoming_movies.length"
      :per-page="per_page"
      aria-controls="my-table"
      @input="paginate(upcoming_current,upcoming_movies,'upcoming')"
    ></b-pagination>
</b-container>
  </div>
</template>
<script>
import { axios_server } from '@/js/axios'
import MovieCard from './MoviesCard'
export default {
  name: 'Movies',
  components: {
    MovieCard
  },
  data(){
    return{
      top_current:1,
      upcoming_current:1,
      per_page:4,
     fitler_items:[],
     upcoming_movies:[],
upcoming_fitler_movies:[],
      top_rated_movies:[]
  }},
 async created() {
    try {
      //get toprated movies
      const response = await axios_server.get(`top_rated?api_key=8e191f986456b9abadac43102d6b3b51`)
      this.top_rated_movies = response.data.results;
      this.top_rated_movies.sort((a,b)=>{return a.popularity-b.popularity}) 
      this.top_rated_movies=this.top_rated_movies.reverse();
      this.fitler_items=this.top_rated_movies.slice(0,4)
      //get upcoming movies
            const upcoming_response = await axios_server.get(`upcoming?api_key=8e191f986456b9abadac43102d6b3b51`)
      this.upcoming_movies = upcoming_response.data.results;
      this.upcoming_fitler_movies=this.upcoming_movies.slice(0,4)
    } catch (e) {
      console.log("error is",e)
    }},
  methods:{
    paginate(currentPage,movies,type){
     var list =movies.filter((item,index)=>{
        let offset=this.per_page*currentPage 
         if(currentPage==1 && index<offset){
         return item       
         }
         else{
           let pre_offset=this.per_page*(currentPage-1)
           if(index>=pre_offset && index<offset){
             return item
           }
         }}
         );
         if(type=='top_rated')
         this.fitler_items=list
         else{
           this.upcoming_fitler_movies=list
         }
    }
  }}
  </script>