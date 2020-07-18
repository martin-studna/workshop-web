<template>
  <div class="introduction">
    <h1>
      <div>DESIGNER</div> 
      <div id="and">&</div>
      <div>CREATIVE</div> 
    </h1>
    <h3>JACOB KOTSURA</h3>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.introduction {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.introduction h1 {
  font-size: 9em;
  font-weight: 900;
  text-align: right;

  word-wrap: break-word;
  line-height: 0.8;
  margin-block-end: .1em;
}

#and {
  font-size: 60px;
  line-height: 0.2;
  margin: 1.8rem 0;
  text-align: center;
}
</style>
