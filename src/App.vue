<template>
  <nav class="navbar navbar-expand-lg navbar-light px-4 ">
            <router-link class="" to="/">
<div class="logo "><img src="assets/images/logo.png" alt="logo"></div></router-link>
    <ul class="navbar-nav  pt-3">
      <li class="nav-item d-inline">
        <router-link class="nav-link text-light h4" to="/">Home</router-link>
      </li>
      <li class="nav-item d-inline">
        <router-link class="nav-link text-light h4" to="/shop">Shop</router-link>
      </li>
    </ul>
</nav>
  <router-view />
  <footer class="container py-5">
      <div class="row">
        <div class="col-12 col-md">
          <img class="m-0" src="assets/images/logo.png">
          <small class="d-block mb-3 text-muted">&copy; 2017-2018</small>
        </div>
        <div class="col-6 col-md">
          <h5>Features</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="#">Routing</a></li>
            <li><a class="text-muted" href="#">Bootstrap</a></li>
            <li><a class="text-muted" href="#">Modals/drops</a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>Pages</h5>
          <ul class="list-unstyled text-small">
            <li><router-link class="text-muted" to="/">Home</router-link></li>
            <li><router-link class="text-muted" to="/shop">Shop</router-link></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>Resources</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="https://getbootstrap.com/">Bootstrap</a></li>
            <li><a class="text-muted" href="https://vuejs.org">Vuejs</a></li>
            <li><a class="text-muted" href="https://www.npmjs.com/package/">npm</a></li>
          </ul>
        </div>
      </div>
    </footer>
</template>
