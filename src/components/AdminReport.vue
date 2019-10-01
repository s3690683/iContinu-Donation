<template>
    <div>
        <br /> <br /> <br /> <br />
         <download-excel class="btn btn-default"
           :data="report"
           :fields="json_fields"
           worksheet="My Worksheet"
           name="report.xls">
             <b-button variant="primary">Export Report</b-button>
         </download-excel>
        <b-table striped hover :items="report" :fields="fields"></b-table>
    </div>

</template>

<style scoped>
  /*  .report-title {
        margin-top: 30px;
        text-align: center;
    }*/

</style>

<script>

    export default {
        name: "AdminReport",
        data: function () {
            return {
                title: "Transactions Report",
                report: [],
                fields: [
                  {
                    key: 'transID',
                    label: 'Transaction',
                    sortable: true
                  },
                  {
                    key: 'orgName',
                    label: 'Organisation',
                    sortable: true
                  },
                  {
                    key: 'tranAnt',
                    label: 'Amount $',
                    sortable: true,
                  },
                  {
                    key: 'tranDate',
                    label: 'Date',
                    sortable: true
                  },
                  {
                    key: 'userName',
                    label: 'User',
                    sortable: true
                  },
                ],
                json_fields: {
                    'Transaction': 'transID',
                    'Organisation': 'orgName',
                    'Amount $': 'tranAnt',
                    'Date': 'tranDate',
                    'User': 'userName'
                },
        
            };
        },
        mounted() {
            fetch("http://icontinu-dev.ap-southeast-2.elasticbeanstalk.com/api/TranTbls/report")
                .then(response => response.json())
                .then(data => {
                    this.report = data;
                });
        }
    };
</script>