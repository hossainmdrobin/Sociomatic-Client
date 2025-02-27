import { IoCalendarNumberSharp } from "react-icons/io5";
import { IoIosListBox } from "react-icons/io";
import { RiDashboardFill } from "react-icons/ri";


export const postsProps = {
    title: "Views",
    tabs:[
        {
            name: "Calendar View",
            icon: IoCalendarNumberSharp,
            link:"/app/posts"
        },
        {
            name: "List View",
            icon: IoIosListBox,
            link:"/app/posts/list"
        },
        {
            name: "Board View",
            icon: RiDashboardFill ,
            link:"/app/posts/board"
        }
    ]
}