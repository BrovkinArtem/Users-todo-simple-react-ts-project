import React from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem = ({user, onClick}: UserItemProps) => {
  return (
    <div onClick={() => onClick(user)} key={user.id} style={{padding: 15, border: '1px solid grey'}}>
      {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
    </div>
  );
};

export default UserItem;