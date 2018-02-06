// @flow

import React from 'react';
import { graphql, withApollo, compose } from 'react-apollo';
import type { OperationComponent } from "react-apollo";

import List from './List';
import { list, createItem, updateItem, deleteItem } from '../app/GraphQL';

type Props = {
  id: string,
  data: Object,
  createItem: (options: Object) => Promise<any>,
  updateItem: (options: Object) => Promise<any>,
  deleteItem: (options: Object) => Promise<any>,
};

class ListModel extends React.Component<Props> {
  addItem: (name: string) => void;
  updateItem: (id: string, name: string) => void;
  removeItem: (id: string) => void;

  constructor(props: Props) {
    super(props);

    this.addItem = this.addItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem(name: string): void {
    this.props.createItem({
      variables: {
        listId: this.props.id,
        name,
        checked: false
      }
    });
  }

  updateItem(id: string, name: string): void {
    this.props.updateItem({
      variables: {
        id,
        listId: this.props.id,
        name,
        checked: false
      }
    });
  }

  removeItem(id: string): void {
    this.props.deleteItem({
      variables: {
        id
      }
    });
  }

  render(): ?React$Element<any> {
    const { list, loading, error } = this.props.data;
    if (loading) return <div className="loading">Loading...</div>
    if (error) return <div className="failure">Failed loading list.</div>
    return (
      <List
        list={ list }
        addItem={ this.addItem }
        updateItem={ this.updateItem }
        removeItem={ this.removeItem } />
    );
  }
}

const getOperation = (mutation: Object, name: string):
  OperationComponent<Response, Props> => {
  return graphql(mutation, {
    name,
    options: ({ id }) => ({
      refetchQueries: ['List'],
    })
  });
}

export default compose(
  withApollo,
  graphql(list),
  getOperation(createItem, 'createItem'),
  getOperation(updateItem, 'updateItem'),
  getOperation(deleteItem, 'deleteItem'),
)(ListModel);
