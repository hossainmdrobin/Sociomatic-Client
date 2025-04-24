"use client"
import AppSideBar from "@/components/partials/AppSidebar/AppSideBar";
import "./../globals.css";
import ReduxProvider from "@/redux/provider";
import CreatePost from "@/components/posts/createPost/CreatePost";
import Topbar from "@/components/posts/Topbar/Topbar";
import SocialLoginButtons from "@/components/partials/SocialLogin/SocialLoginButtons";


export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
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

            </section>
        </ReduxProvider>
    );
}
