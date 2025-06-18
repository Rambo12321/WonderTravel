import { Header, StatsCard, TripCard } from "components";
import React from "react";

const dashboard = () => {
  const user = {
    name: "Rohan",
    email: "rohankaushik2015@gmail.com",
  };

  const dashboardStats = {
    totalusers: 12870,
    usersJoined: {
      currentMonth: 120,
      lastMonth: 80,
    },
    totalTrips: 3210,
    tripsCreated: {
      currentMonth: 150,
      lastMonth: 100,
    },
    userRole: {
      total: 62,
      currentMonth: 25,
      lastMonth: 15,
    },
  };

  const { totalusers, usersJoined, totalTrips, tripsCreated, userRole } =
    dashboardStats;

  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome${user.name ? ` back, ${user.name}` : ", Guest"} 👋🏻`}
        description="Track activities, trends and popular destinations in real time."
      />
      <section className="felx flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard
            headerTitle="Total Users"
            total={totalusers}
            currentMonthCount={usersJoined.currentMonth}
            lastMonthCount={usersJoined.lastMonth}
          />
          <StatsCard
            headerTitle="Total Trips"
            total={totalTrips}
            currentMonthCount={tripsCreated.currentMonth}
            lastMonthCount={tripsCreated.lastMonth}
          />
          <StatsCard
            headerTitle="Users Active"
            total={userRole.total}
            currentMonthCount={userRole.currentMonth}
            lastMonthCount={userRole.lastMonth}
          />
        </div>
      </section>
      <StatsCard />
      <TripCard />
    </main>
  );
};

export default dashboard;
