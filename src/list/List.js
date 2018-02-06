// @flow

import React from 'react';

import ListItems from './ListItems';
import ItemSave from '../item/ItemSave';
import type { ItemType } from '../item/Item';

import './list.css';

export type ListType = {
  id: string,
  name: string,
  items: Array<ItemType>,
}

type Props = {
  list: ListType,
  addItem: (name: string) => void,
  updateItem: (id: string, name: string) => void,
  removeItem: (id: string) => void,
};

class List extends React.Component<Props> {
  render(): ?React$Element<any> {
    const { list, addItem, updateItem, removeItem } = this.props;
    return (
      <section className="list">
        <ListItems
          list={ list }
          updateItem={ updateItem }
          removeItem={ removeItem } />
        <ItemSave
          addItem={ addItem } />
      </section>
    );
  }
}

export default List;
