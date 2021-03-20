import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, Wrapper, StyledTitle } from './UsersList.styles';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Wrapper>
        <StyledTitle>Students List</StyledTitle>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UsersList;
