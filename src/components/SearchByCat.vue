<template>
    <div class="row" >
      <div class="col">
        <router-link class="btn btn-sm btn-outline text-dark" :to="{ name: 'OrgLists', 
          params: { orgLists: searchedOrg }}"><img src="@/assets/student.jpg" width="15%" /></router-link>
      </div>
     
    </div>
</template>

<script>
import OrgLists from "./OrgLists"
export default {
    name: "SearchByCat",
    data() {
        return {
            keyword: ""
        };
    },
    props: ["OrgList"],
    computed: {
        searchedOrg: function() {
            return this.OrgList.filter(item => {
                return(
                    item.orgType.match("school")
                )
            })
        }
    },
    components:{
      OrgLists
  }
}
</script>