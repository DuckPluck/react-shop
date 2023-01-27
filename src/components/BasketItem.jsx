import React from 'react';

export function BasketItem({
                             id,
                             name,
                             price,
                             quantity,
                             deleteBasketItem,
                             incrementQuantity,
                             decrementQuantity,
                           }) {
  return (
      <li className="collection-item">
        {name}{' '}
        {quantity === 1 ? (
            <i onClick={() => deleteBasketItem(id)} className="material-icons basket-quantity">
              remove
            </i>
        ) : (
            <i onClick={() => decrementQuantity(id)} className="material-icons basket-quantity">
              remove
            </i>
        )}{' '}
        х{quantity}{' '}
        <i onClick={() => incrementQuantity(id)} className="material-icons basket-quantity">
          add
        </i>{' '}
        = {price * quantity}
        <span
            onClick={() =>
                incrementQuantity({
                  id,
                  name,
                  price,
                  quantity,
                })
            }>
        {' '}
          plus
      </span>
        <span onClick={() => deleteBasketItem(id)} className="secondary-content">
        <i className="material-icons basket-delete">close</i>
      </span>
      </li>
  );
}
