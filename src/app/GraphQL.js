// @flow

import gql from 'graphql-tag';

export const list = gql`
  query List($id: ID!) {
    list(id: $id) {
      id
      name
      items {
        id
        listId
        name
        checked
      }
    }
  }
`;

export const createItem = gql`
  mutation CreateItem($listId: ID, $name: String, $checked: Boolean) {
    createItem(listId: $listId, name: $name, checked: $checked) {
      id
      listId
      name
      checked
    }
  }
`;

export const updateItem = gql`
  mutation UpdateItem($id: ID!, $listId: ID, $name: String, $checked: Boolean) {
    updateItem(id: $id, listId: $listId, name: $name, checked: $checked) {
      id
      listId
      name
      checked
    }
  }
`;

export const deleteItem = gql`
  mutation DeleteItem($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;
