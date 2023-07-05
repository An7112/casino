import React, { useState } from 'react';
import { Radio, Tabs } from 'antd';
import AccountProfile from './tab-page/account-profile';
import UpdateBank from './tab-page/update-bank';
import Inbox from './tab-page/inbox';
import Deposit from './tab-history/deposit/deposit';
import Transfer from './tab-history/transfer/transfer';
import MyBetting from './tab-history/my-betting/my-betting';

const TabsHistory = () => {
  const [size, setSize] = useState('small');

  const ArrayTabs = [
    {id: 1, tabTitle: 'DEPOSIT / WITHDRAWAL', component: <Deposit/>},
    {id: 2, tabTitle: 'FUND TRANSFER', component: <Transfer/>},
    {id: 3, tabTitle: 'MY BETTING', component: <MyBetting/>},
  ]

  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        type="card"
        size={size}
        items={ArrayTabs.map((element, i) => {
          return {
            label: <span className='tab-title'>
              {element.tabTitle}
            </span>,
            key: element.id,
            children: element.component,
          };
        })}
      />
    </div>
  );
};

export default TabsHistory;
