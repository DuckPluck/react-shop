import React from 'react';

import {BasketItem} from './BasketItem';

export function BasketList({order, handleBasketShow}) {
  const totalPrice = order.reduce((acc, el) => {
    return acc + el.price * el.quantity;
  }, 0);

  return (
      <ul className="collection basket-list">
        <li className="collection-item active">Basket</li>
        {order.length ? (
            order.map((el) => <BasketItem key={el.id} {...el} />)
        ) : (
            <li className="collection-item">Basket is empty</li>
        )}
        <li className="collection-item active">Total cost: {totalPrice} V-BUCKS</li>
        <i onClick={handleBasketShow} className="material-icons basket-close">
          close
        </i>
      </ul>
  );
}
