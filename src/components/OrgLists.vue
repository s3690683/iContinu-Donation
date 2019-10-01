<template>

    <div>

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
            
        </div> <br /><br />
        
        <br /> <br />
        <div class="list-container" style="background-color: white">
            <h4>{{title}}</h4>
            <div v-for="(item, i) in orgLists" v-bind:key="i">
                <table>
                    <tr>
                        <td>
                            <h4>{{title}}</h4>
                            <h4>{{item.orgName}}</h4>
                            <p>{{item.orgState}}</p>
                            <p>{{item.orgType}}</p>
                        </td>
                        <td>
                            <div class="float-right"><router-link class="btn btn-sm btn-outline text-dark" :to="{ name: 'Payment', params: { org: item }}"><button type="button" class="btn btn-primary">Donate now</button></router-link></div>
                        </td>
                    </tr>
                </table>

            </div>
        </div>
  </div>
</template>

<style>
    table {
  border-collapse: collapse;
  width: 100%;
  margin-top:40px;
}

td {
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

tr:nth-child(even){background-color: white}

.list-container{
    width:75%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 15px;
}
</style>

<script>

export default {
  name: "OrgLists",
   title: "Organization List",
  props: ["orgLists"]
};
</script>