import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  const { name, email, address } = user;

  return (
    <div className="border rounded p-4 shadow my-2">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-sm text-gray-600">{email}</p>
      <p className="text-sm">
        {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
