<template>
  <div class="container">
    <h1 class="heading">
      {{ item.title }}
    </h1>
    <img class="img" :src="item.thumbnail" :alt="item.title">
    <nuxt-content :document="item" />
    <div v-if="item.author" class="author-box">
      <img class="authorimg" :src="item.author.img" :alt="item.author.name">

      <div>
        <p>{{ item.author.name }}</p>
        <p>{{ item.author.job }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, route }) {
    const item = await $content('blog', route.params.slug).fetch();
    const authors = await $content('authors').fetch();
    const author = authors.find(author => author.name === item.author);
    if (author) item.author = author;
    return { item };
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
  max-width: 400px;
  width: 100%;
  margin-bottom: 30px;
}
.authorimg {
  max-width: 100px;
  width: 100%;
}
.link {
  margin-bottom: 30px;
  display: block;
}
.author-box {
  display: inline-grid;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;
  margin-top: 30px;
  border: 1px solid black;
  padding: 20px;
}
</style>
