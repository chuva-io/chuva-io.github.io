import { Outlet } from "@tanstack/react-router";

export default () => {
  return (
    <div>
      <div>
        <h1>Dashboard</h1>
      </div>
      <Outlet /> {/* This renders the current page */}
    </div>
  );
};
