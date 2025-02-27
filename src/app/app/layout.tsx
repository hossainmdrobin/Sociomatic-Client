"use client"
import AppSideBar from "@/components/partials/AppSidebar/AppSideBar";
import "./../globals.css";
import ReduxProvider from "@/redux/provider";
import CreatePost from "@/components/posts/createPost/CreatePost";


export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ReduxProvider>
            <section>
                <AppSideBar />
                {children}
                <CreatePost />
            </section>
        </ReduxProvider>
    );
}
