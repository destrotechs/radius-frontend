export const menuitems = [
        {
            title:"Packages",
            icon:"bi bi-archive-fill",
            component:"Package",
            path:"/packages",
            children:[
                {
                    title:"All Packages",
                    path:"/packages",
                    icon:"bi bi-circle",
                },
            ]
        },
        {
            title:"Users",
            component:"",
            icon:"bi bi-arrow-down-up",
            children:[
                {
                    title:"New Users",
                    path:"/users",
                    icon:"bi bi-circle",
                    component:"",
                },
            ]
        },
        {
            title:"Tempo",
            path:"/packages",
            icon:"bi bi-menu-button-wide",
            component:"Package",
            children:[
                
            ]
        }
    ]