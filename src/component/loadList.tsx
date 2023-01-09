import React, { ReactElement, useEffect } from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import { get } from '../network';

export const LoadList = (): ReactElement => {
  const requestString = `globalEntity/GET_LIST?where={"entityType":"truck"}&orderBy={"data.address":1}&maxReturn=50`;
  console.log(encodeURI(requestString));
  useEffect(() => {
    get(requestString)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="address.street" />
        <TextField source="phone" />
        <TextField source="website" />
        <TextField source="company.name" />
      </Datagrid>
    </List>
  );
};
