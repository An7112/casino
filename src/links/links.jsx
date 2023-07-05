
import {FaUserAlt, FaWallet, FaPiggyBank, FaFileAlt} from 'react-icons/fa'

export const linkList = [
    {
        link: "home",
        name: "HOME",
    },
    {
        link: "live-casino",
        name: "LIVE CASINO",
    },
    {
        link: "sport",
        name: "SPORT",
    },
    {
        link: "esports",
        name: "ESPORTS",
    },
]

export const userLink = [
    {
        link: "user-info/cashier",
        name: "CASHIER",
        icon: <FaWallet style={{fontSize:'24px'}}/>
    },
    {
        link: "user-info/rewards",
        name: "REWARDS",
        icon: <FaPiggyBank style={{fontSize:'24px'}}/>
    },
    {
        link: "user-info/profile",
        name: "PROFILE",
        icon: <FaUserAlt style={{fontSize:'24px'}}/>
    },
    {
        link: "user-info/history",
        name: "HISTORY",
        icon: <FaFileAlt style={{fontSize:'24px'}}/>
    },
]