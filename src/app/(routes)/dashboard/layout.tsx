import { loggedUser as mockUser } from "@/app/functions/mock/mock_data";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const loggedUser = mockUser;

    return (
        <>
            <h1>{`Logged as ${loggedUser.name}`}</h1>
            {children}
        </>
    )
}