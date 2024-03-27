'use client';
import SideMenuButton from "../../dashboard/SideMenu/SideMenuButton";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  function Logout() {
    localStorage.removeItem('token');
    console.log('Logged out');
    useRouter().push('/login');
  }

  return <SideMenuButton onClick={Logout} icon={'logout'} label={'Logout'} />;
}
