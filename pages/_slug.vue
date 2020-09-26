<template>
  <div class="container">
    <h1 class="heading">
      {{ item.title }}
    </h1>
    <img class="img" :src="item.thumbnail" :alt="item.title">
    <nuxt-content :document="item" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, route }) {
    const item = await $content('blog', route.params.slug).fetch();
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
.link {
  margin-bottom: 30px;
  display: block;
}
</style>
