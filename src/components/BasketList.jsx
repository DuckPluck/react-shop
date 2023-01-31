import React, {useContext} from 'react';
import {ShopContext} from '../context';

import {BasketItem} from './BasketItem';

export function BasketList() {
  const {handleBasketShow, order = []} = useContext(ShopContext);
  const totalPrice = order.reduce((acc, el) => acc + el.price * el.quantity, 0);

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
