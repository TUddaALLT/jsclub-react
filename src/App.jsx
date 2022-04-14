import "./App.css";

import { Routes, Route, Outlet } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

import Header from "./components/layouts/Header";
import FooterCentered from "./components/layouts/FooterCentered";
import NotFoundPage from "./components/NotFoundPage";

import Home from "./features/home";
import Department from "./features/department";
import Distinguished, { ProfileDistin } from "./features/distinguished";
import Member, { MemberProfile } from "./features/member";

export function App() {
  return (
    <MantineProvider>
      <NotificationsProvider>
        <Header />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            backgroundColor: "white",
            paddingBottom: 120,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/departments" element={<Department />} />

            <Route path="/distinguished" element={<Outlet />}>
              <Route index element={<Distinguished />} />
              <Route path=":profileId" element={<ProfileDistin />} />
            </Route>

            <Route path="/members" element={<Outlet />}>
              <Route index element={<Member />} />
              <Route path=":profileId" element={<MemberProfile />} />
            </Route>

            <Route path="/blog" element={<h1>blog</h1>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        <FooterCentered />
      </NotificationsProvider>
    </MantineProvider>
  );
}
