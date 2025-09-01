"use client";

import { useCart } from '@/context/CartContext'
import React from 'react'

export default function Cart() {
  const {cart} = useCart();
  return (
    <div>
        {cart.map((item)=>{
            return (
              <div key={item.id}>
                <h3>{item.title}</h3>

              </div>
            )
        })}
    </div>
  )
}
// create context == to cerate a context 
// use context == to have all in centext and used
//
//