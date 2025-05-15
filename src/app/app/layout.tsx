"use client"
import AppSideBar from "@/components/partials/AppSidebar/AppSideBar";
import "./../globals.css";
import ReduxProvider from "@/redux/provider";
import CreatePost from "@/components/posts/createPost/CreatePost";
import Topbar from "@/components/posts/Topbar/Topbar";
import SocialLoginButtons from "@/components/partials/SocialLogin/SocialLoginButtons";
import FacebookLoginModal from "@/components/partials/SocialLoginModals/FacebookLoginModal";
// import { redirect, usePathname } from 'next/navigation';

// import Cookies from 'js-cookie';


export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // console.log("token is",!Cookies.get('token'));
    // if (!Cookies.get('token')) {
    //     // redirect('/login');
    // }
    return (
        <ReduxProvider>
            <section>
                <AppSideBar />
                <div className='ml-[40px] bg-gray-50'>
                    <div >
                        <Topbar />
                    </div>
                </div>
                {children}
                <CreatePost />
                <SocialLoginButtons />
                <FacebookLoginModal />
            </section>
        </ReduxProvider>
    );
}
