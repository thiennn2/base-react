import React from 'react';
import { Dropdown as DropdownAntd, Menu } from 'antd';

interface IMenu {
    key: string,
    label: string | React.ReactNode | React.ReactNode[],
}

type IMenus = IMenu[];

type Props = {
    menu?: IMenus;
    children?: React.ReactNode | React.ReactNode[];
}

function Dropdown(props: Props) {
    const menu = (
        <Menu
          items={props.menu}
        />
      );

    return (
        <DropdownAntd overlay={menu}>
            {props.children}
        </DropdownAntd>
    );
}

export default Dropdown;
