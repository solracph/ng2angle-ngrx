
const Home = {
    text: 'Home',
    link: '/home',
    icon: 'icon-home'
};

const MrokerLeadManagement = {
    text: 'Lead',
    link: '/lead',
    icon: 'icon-home',
    submenu: [
        {
            text: "Prospect Tracking",
            link: "/lead/prospect-tracking"
        },
        {
            text: "Prospective Members",
            link: "/lead/prospective-members"
        }
    ]
};

const Material = {
    text: "Material",
    link: "/material",
    icon: "fa fa-shield-alt",
    submenu: [
        {
            text: "Widgets",
            link: "/material/widgets"
        },
        {
            text: "Cards",
            link: "/material/cards"
        },
        {
            text: "Forms",
            link: "/material/forms"
        },
        {
            text: "Inputs",
            link: "/material/inputs"
        },
        {
            text: "Lists",
            link: "/material/lists"
        },
        {
            text: "Whiteframe",
            link: "/material/whiteframe"
        },
        {
            text: "Colors",
            link: "/material/colors"
        },
        {
            text: "ng2Material",
            link: "/material/ngmaterial"
        }
    ],
    "alert": "new",
    "label": "badge badge-primary"
};


const headingMain = {
    text: 'Main Navigation',
    heading: true
};

export const menu = [
    headingMain,
    MrokerLeadManagement,
    Home,
    Material
];
