<template>
  <div class="container" id="donate">
    <div class="container">
      <!--<router-link class="btn btn-sm btn-outline text-dark" to="/Home">Home</router-link>
      <router-link class="btn btn-sm btn-outline text-dark" to="/OrgLists">Organization</router-link>
      <router-link class="btn btn-sm btn-outline text-dark" to="/About">About</router-link>-->
    </div>
    <h1>Donate Today</h1>
    <h4>To</h4>
    <h5>{{org.orgName}}</h5>
    <h5>{{org.orgDescription}}</h5>
    <!--amend action document -->
    <form class="form" action="proces.php" method="post">
      <fieldset>
        <div class="name">
          Name:*
          <br />
          <input type="text" name="firstName" placeholder="First Name" />
          <input type="text" name="lastName" placeholder="Last Name" />
          <br />
          <br />
        </div>
        <div class="email">
          Email:*
          <br />
          <input type="email" name="email" placeholder="john@example.com" />
          <br />
          <br />
        </div>
        <div class="Amount">
          Amount:*
          <br />
          <input type="number" min="1" name placeholder="$" />
          <br />
          <br />
        </div>
        <div class="btn btn-primary">
          <input type="submit" value="Continue" @click="addPayment();" />
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: "Payment",
  props: ["org"]
};
</script>