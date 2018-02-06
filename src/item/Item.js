// @flow

import React from 'react';

import ItemSave from './ItemSave';
import ItemRemove from './ItemRemove';

export type ItemType = {
  id: string,
  name: string,
}

type Props = {
  item: ItemType,
  updateItem: (id: string, name: string) => void,
  removeItem: (id: string) => void,
};

class Item extends React.Component<Props> {
  render(): ?React$Element<any> {
    const { item, updateItem, removeItem } = this.props;
    return (
      <div className="item">
        <ItemSave
          item={ item }
          updateItem={ updateItem } />
        <ItemRemove
          item={ item }
          removeItem={ removeItem } />
      </div>
    );
  }
}

export default Item;
