import React from "react";
import UserTable from "./new/UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}

const UserPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div className="p-3 rounded-xl">
      <h1>Users</h1>
      <Link href="users/new" className="btn">
        New User
      </Link>
      <UserTable sortBy={sortOrder} />
    </div>
  );
};

export default UserPage;
