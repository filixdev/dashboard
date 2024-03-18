import { CalendarMonthIcon, FormatListBulletedIcon, HomeIcon, NoteIcon, PermContactCalendarIcon, PlayCircleIcon, SmartToyIcon, WbSunnyIcon } from '../../Icons/Icons'

type SidebarItem = {
    id: number;
    name: string;
    path: string;
    icon: JSX.Element;
}[]

export const sidebarData: SidebarItem = [
    {
        id: 1,
        name: "Dashboard",
        path: "/",
        icon: <HomeIcon />,
    },
    {
        id: 2,
        name: "Todo",
        path: "/todo",
        icon: <FormatListBulletedIcon />,
    },
    {
        id: 3,
        name: "Contacts",
        path: "/contacts",
        icon: <PermContactCalendarIcon />,
    },
    {
        id: 4,
        name: "Calendar",
        path: "/calendar",
        icon: <CalendarMonthIcon />,
    },
    {
        id: 5,
        name: "Weather",
        path: "/weather",
        icon: <WbSunnyIcon />,
    },
    {
        id: 6,
        name: "Music",
        path: "/music",
        icon: <PlayCircleIcon />,
    },
    {
        id: 7,
        name: "Notes",
        path: "/notes",
        icon: <NoteIcon />,
    },
    {
        id: 9,
        name: "AI",
        path: "/ai",
        icon: <SmartToyIcon />,
    },
]


