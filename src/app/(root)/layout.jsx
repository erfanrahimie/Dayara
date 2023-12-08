'use client';
import Sidebar from "@/components/shared/sidebar/Sidebar";


// export const metadata = {
//   title: PROJECT.name,
//   description: PROJECT.description,
// };

export default function RootLayout({ children }) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}
