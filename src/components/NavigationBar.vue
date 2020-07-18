<template>
  <nav class="navbar">
    <div style="margin-left: 0">PROJECTS</div>
    <div>ABOUT</div>
    <div>CONTACT</div>
    <div id="space"></div>
    <div style="margin: 0">LOGO</div>

  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navbar {
    background: black;
    height: 4rem;
    color: white;
    font-weight: 400;

    display: flex;
    flex-direction: row;
    align-items: center;
}

.navbar > div {
    margin: 0 15px;
}

.navbar > div:hover {
    color: rgb(0, 255, 21);
}

#space {
    flex-grow: 1;
}

</style>
