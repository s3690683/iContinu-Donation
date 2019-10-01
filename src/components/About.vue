<template>
    <div class="container">
        <div>
            <!--<b-navbar toggleable="lg" type="dark" variant="secondary" fixed="top">
                <b-navbar-brand href="#">iContinu</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item><router-link class="btn btn-outline text-light" to="/Home">Home</router-link></b-nav-item>
                        <b-nav-item><router-link class="btn btn-outline text-light" to="/OrgLists">Organization</router-link></b-nav-item>
                        <b-nav-item><router-link class="btn btn-outline text-light" to="/About">About</router-link></b-nav-item>
                        <b-nav-item-dropdown right>
                            <template v-slot:button-content>
                                <b-button class="btn-sm" variant="light">Login</b-button>
                            </template>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>-->
        </div>
        <img src="@/assets/community2.jpg" class="img-responsive" alt="Cinque Terre" width="100%" />
       
        <div class="description">
            <h1>Who We Are</h1> <br>
            <p>
                I Continu is a melbourne based start-up aiming to provide accessibility for individuals
                to make donations directly to their charity or non-profit Organisation of choice.
                Due to the major transition to a cashless society,donations have seen big declines and
                many of these Organisations are struggling to survive.We believe it is essential that this
                trend is reversed and therefore iContinu is looking to form partnerships with organisations
                including religious and faith based bodies and its wider community including attached schools
                social justice,health,hospitals and aged care services in addition to local congregational
                churches and parishes.
            </p>
        </div>
      
        <div class="boxes">
            <div class="centre">
                <div class="box">
                    <h4>Company's Foundingdate</h4>
                    <p>December 1995</p>
                    <p>Website Address</p>
                </div>
                <div class="box">
                    <h4>Corporation Headquarters</h4>
                    <p>Melbourne</p>
                    <p>Victoria,Australia</p>
                </div>
                <div class="box">
                    <h4>Social Innovation</h4>
                    <p>
                        We use our unique resources to drive meaningful,lasting
                        social impact through our services
                    </p>
                    <p>
                        <a href="#">Learn More</a>
                    </p>
                </div>
                <div class="box">
                    <h4>Media Inquiries</h4>
                    <p>Instructions for media inquiries to any of our global regions</p>
                    <p>
                        <a href="#">Contact Us</a>
                    </p>
                </div>
                <div class="box">
                    <h4>Responsible Practices</h4>
                    <p>
                        Our beliefs are reflected in the
                        way we do business every day
                    </p>
                    <p>
                        <a href="#">Learn More</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "About"
};
</script>

<style>
html,
body {
  height: 100%;
}
body {
  font: 15px/1.5 Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
  background-color: none;
}
.title {
  padding-bottom: 50px;
}
/*Global */

.container {
  min-height: 70%;
  margin: auto;
  width: 80%;
}

.title img {
  width: 100%;
  margin-bottom: 0;
}

.title {
  position: relative;
  text-align: centre;
  color: white;
}

.TopLeft {
  position: absolute;
  top: 8px;
  left: 100px;
  color: white;
}
/* IContinu highlight */

.title .hlight {
  color: white;
  font-style: italic;
  font-weight: bold;
  font-size: 30px;
  padding-right: 10px;
}
.title .highlight {
  font-size: 20px;
}

.Centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-style: italic;
  font-weight: normal;
  font-size: 50px;
}

/* aside */

aside {
  font: 15px/1.5 Arial Helvetica sans-serif;
  background: none;
  min-height: 25px;
  border-bottom: Silver 1px solid;
}

aside a {
  color: black;
  text-decoration: none;
  font-size: 19px;
  font-weight: lighter;
}

aside ul {
  margin: 0;
  padding: 0;
}

aside li {
  float: left;
  display: inline;
  padding: 0 20px 0 20px;
}
aside nav {
  margin-top: 30px;
}

aside .highlight,
aside .current a {
  color: blue;
  font-weight: bold;
}
aside a:hover {
  color: red;
  font-weight: bold;
}

/* des of icontinu */
.description {
    background-color:white;
    
  padding: 15px;
}
.description h1 {
  text-align: center;
  font-weight: lighter;
}
.description p {
  font: 20px/1.5 Arial Helvetica San-serif;
  font-weight: lighter;
  padding: 0 20px 0 20px;
}

/*Boxes */
.boxes {
  background: #e6e6fa;
}
.boxes p {
  font-weight: lighter;
}
.centre {
  max-width: 80%;
  margin: auto;
  overflow: hidden;
  padding: 10px;
}
.box {
  float: left;
  text-align: centre;
  width: calc(100% / 5);
  padding: 15px;
}

/*LeaderShip */

.LSHIP {
  text-align: center;
  margin-bottom: 150px;
}
.LSHIP h2 {
  font-family: "Courier New", Courier, monospace;
  font-weight: lighter;
  font-size: 40px;
  padding-top: 10px;
}
.LSHIP h3 {
  font-color: grey;
  font-weight: lighter;
}
.LSHIP p {
  font-weight: lighter;
}
.LSHIP img {
  width: 200px;
}

/*footer*/
.footer {
  position: relative;
  height: 100px;
  margin-top: -100px;
  clear: both;
  border-top: Silver 1px dashed;
}
.footer p {
  text-align: center;
}
</style>