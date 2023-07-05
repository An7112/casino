import React, { useState } from 'react';
import { Radio, Tabs } from 'antd';
import AccountProfile from './tab-page/account-profile';
import UpdateBank from './tab-page/update-bank';
import Inbox from './tab-page/inbox';

const TabsComponent = () => {
  const [size, setSize] = useState('small');
  const onChange = (e) => {
    setSize(e.target.value);
  };

  const ArrayTabs = [
    {id: 1, tabTitle: 'Account Profile', component: <AccountProfile/>},
    {id: 2, tabTitle: 'Update Bank Details', component: <UpdateBank/>},
    {id: 3, tabTitle: 'Inbox', component: <Inbox/>},
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

export default TabsComponent;
