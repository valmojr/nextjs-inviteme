'use client';
import BottomMenuButton from "../../dashboard/BottomMenu/BottomMenuButton";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  function Logout() {
    localStorage.removeItem('token');
    console.log('Logged out');
    useRouter().push('/login');
  }

  return <BottomMenuButton onClick={Logout} icon={'logout'} label={'Logout'} />;
}
