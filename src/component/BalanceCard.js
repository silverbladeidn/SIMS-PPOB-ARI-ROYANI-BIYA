// BalanceCard.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleBalance } from '../redux/balanceSlice';
import backgroundSaldo from '../Assets/Background Saldo.png';

const BalanceCard = () => {
  const dispatch = useDispatch();
  const { balanceHidden, balance } = useSelector((state) => state.balance);

  return (
    <div
      className="balance-card"
      style={{
        backgroundImage: `url(${backgroundSaldo})`,
        backgroundSize: 'cover',
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
      }}
    >
      <p>Saldo anda</p>
      <h2>{balanceHidden ? 'Rp ••••••••••' : `Rp ${balance}`}</h2>
      <button onClick={() => dispatch(toggleBalance())}>Lihat Saldo 👁</button>
    </div>
  );
};

export default BalanceCard;
