<template>
  <div class="container">
    <h1 class="heading">
      articles
    </h1>
    <div class="grid">
      <nuxt-link
        v-for="article in articles"
        :key="article.slug"
        :to="article.slug"
        class="card">
        <h2 class="heading">
          {{ article.title }}
        </h2>
        <div
          class="img"
          :style="`background-image: url('${article.thumbnail}');`" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { articles: [] };
  },

  async fetch() {
    this.articles = await this.$content('blog').fetch();
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;
}
.heading {
  color: black;
  margin-bottom: 10px;
  text-decoration: none;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}
.card {
  display: block;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 5px;
  transition: all 0.3s ease-out;
  &:hover {
    transform: scale(1.01);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  }
}
.img {
  max-width: 100%;
  width: 100%;
  background: center center / cover no-repeat;
  &:after {
    content: '';
    display: block;
    padding-top: 55%;
  }
}
</style>
