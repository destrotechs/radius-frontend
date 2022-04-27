export const menuitems = [
        {
            title:"Packages",
            icon:"bi bi-box",
            component:"Package",
            path:"/packages",
            children:[
                {
                    title:"All Packages",
                    path:"/packages",
                    icon:"bi bi-circle",
                },
                {
                    title:"New Package",
                    path:"/packages/new",
                    icon:"bi bi-circle",
                    component:"",
                },
            ]
        },
        {
            title:"Users",
            component:"",
            icon:"bi bi-person",
            children:[
                {
                    title:"New User",
                    path:"/users/new",
                    icon:"bi bi-plus-circle-dotted text-lg",
                    component:"",
                },
                {
                    title:"All Users",
                    path:"/users/all",
                    icon:"bi bi-card-list text-lg",
                    component:"",
                },
                {
                    title:"Online Users",
                    path:"/users/online",
                    icon:"bi bi-circle text-success",
                    component:"",
                },
                {
                    title:"Bundle Balances",
                    path:"/users/bundlebalance",
                    icon:"bi bi-circle",
                    component:"",
                },
            ]
        },
        {
            title:"Payments",
            path:"/packages",
            icon:"bi bi-cash-stack",
            component:"Package",
            children:[
                {
                    title:"All Payments",
                    path:"/payments/all",
                    icon:"bi bi-money-bill",
                    component:"",
                },
                {
                    title:"Initiate Payment",
                    path:"/payments/initiate",
                    icon:"bi bi-circle",
                    component:"",
                },
                
            ]
        },
        {
            title:"Maintenance",
            path:"/packages",
            icon:"bi bi-hammer",
            component:"Package",
            children:[
                {
                    title:"Stale Connections",
                    path:"/connection/stale",
                    icon:"bi bi-money-bill",
                    component:"",
                },
                {
                    title:"Test Connectivity",
                    path:"/connection/test",
                    icon:"bi bi-circle",
                    component:"",
                },
                
            ]
        },
        {
            title:"Reports",
            path:"",
            icon:"bi bi-list",
            component:"Package",
            children:[
                {
                    title:"Connection Attempts",
                    path:"/connection/attempt",
                    icon:"bi bi-money-bill",
                    component:"",
                },
                                
            ]
        }
    ]