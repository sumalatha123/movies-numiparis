<template>

  <b-col md="3" lg="3" xl="3" class="p-1">
       <b-card :title="item.title" >
        <b-card-text>
         <p>Popularity:{{item.popularity}}</p>
<p>         Release Date:{{item.release_date}}</p>
        </b-card-text>
       <b-card-footer>{{item.overview}}</b-card-footer>
      </b-card>
  </b-col>
</template>
<script>
export default {
  name: "MovieCard",
  props: {
    item: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
