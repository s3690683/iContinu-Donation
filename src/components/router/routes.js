import LoginUser from "../LoginUser"
import RegisterUser from "../RegisterUser"
import DonorReport from "../DonorReport"
import AdminReport from "../AdminReport"
import OrganisationReport from "../OrganisationReport"
import About from "../About"
import OrgLists from "../OrgLists"
import Home from "../Home"
import Payment from "../Payment"

const routes =  [
      {
        path: "*",
        name: 'home',
        component: Home ,
        props: true
      },
      {
        path: "/Home",
        name: 'home',
        component: Home ,
        props: true
      },
      {
        path: "/OrgLists",
        name: 'OrgLists',
        component: OrgLists,
        props: true
      },
      {
        path: "/About",
        name: 'About',
        component: About
      }, 
      {
        path: "/Payment",
        name: 'Payment',
        component: Payment,
        props: true
      },
      {
        path: '/DonorReport',
        name: 'DonorReport',
        component: DonorReport,
        meta: { requiresAuth: true, role: "Customer" },
      },
      {
        path: '/AdminReport',
        name: 'AdminReport',
        component: AdminReport,
        meta: { requiresAuth: true, role: "Admin" },
      },
      {
        path: '/OrganisationReport',
        name: 'OrganisationReport',
        component: OrganisationReport,
        meta: { requiresAuth: true, role: "Customer" },
      },
      {
        path: '/RegisterUser',
        name: 'RegisterUser',
        component: RegisterUser
      },
      {
        path: '/LoginUser',
        name: 'LoginUser',
        component: LoginUser
      },
    ];

    export default routes;