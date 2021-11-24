import { ComponentItem, ToolbarItemUnion } from '@remirror/react';
import { ColumnAttributes } from 'remirror/extensions';

const TWO_COLUMNS: ColumnAttributes = {
  count: 2,
  ill: 'balance',
  ruleColor: '#ccc',
  ruleStyle: 'solid',
  ruleWidth: 'thin',
  gap: '5em',
};
const THREE_COLUMNS: ColumnAttributes = {
  count: 3,
  ill: 'balance',
  ruleColor: '#ccc',
  ruleStyle: 'solid',
  ruleWidth: 'thin',
  gap: '5em',
};
const FOUR_COLUMNS: ColumnAttributes = {
  count: 4,
  ill: 'balance',
  ruleColor: '#ccc',
  ruleStyle: 'solid',
  ruleWidth: 'thin',
  gap: '5em',
};

export const toolbarItems: ToolbarItemUnion[] = [
  {
    type: ComponentItem.ToolbarGroup,
    label: 'History',
    items: [
      {
        type: ComponentItem.ToolbarCommandButton,
        commandName: 'undo',
        display: 'icon',
      },
      {
        type: ComponentItem.ToolbarCommandButton,
        commandName: 'redo',
        display: 'icon',
      },
    ],
    separator: 'none',
  },
  {
    type: ComponentItem.ToolbarGroup,
    label: 'Simple Formatting',
    items: [
      {
        type: ComponentItem.ToolbarCommandButton,
        commandName: 'toggleBold',
        display: 'icon',
      },
      {
        type: ComponentItem.ToolbarCommandButton,
        commandName: 'toggleItalic',
        display: 'icon',
      },
      {
        type: ComponentItem.ToolbarCommandButton,
        commandName: 'toggleUnderline',
        display: 'icon',
      },
      {
        type: ComponentItem.ToolbarCommandButton,
        commandName: 'toggleStrike',
        display: 'icon',
      },
    ],
    separator: 'none',
  },
  {
    type: ComponentItem.ToolbarGroup,
    label: 'Heading Formatting',
    items: [
      {
        type: ComponentItem.ToolbarCommandButton,
        commandName: 'toggleHeading',
        display: 'icon',
        attrs: { level: 1 },
      },
      {
        type: ComponentItem.ToolbarCommandButton,
        commandName: 'toggleHeading',
        display: 'icon',
        attrs: { level: 2 },
      },
      {
        type: ComponentItem.ToolbarCommandButton,
        commandName: 'toggleHeading',
        display: 'icon',
        attrs: { level: 3 },
      },
      {
        type: ComponentItem.ToolbarMenu,
        label: 'Headings',
        items: [
          {
            type: ComponentItem.MenuGroup,
            role: 'radio',
            items: [
              {
                type: ComponentItem.MenuCommandPane,
                commandName: 'toggleHeading',
                attrs: { level: 1 },
              },
              {
                type: ComponentItem.MenuCommandPane,
                commandName: 'toggleHeading',
                attrs: { level: 2 },
              },
              {
                type: ComponentItem.MenuCommandPane,
                commandName: 'toggleHeading',
                attrs: { level: 3 },
              },
              {
                type: ComponentItem.MenuCommandPane,
                commandName: 'toggleHeading',
                attrs: { level: 4 },
              },
              {
                type: ComponentItem.MenuCommandPane,
                commandName: 'toggleHeading',
                attrs: { level: 5 },
              },
              {
                type: ComponentItem.MenuCommandPane,
                commandName: 'toggleHeading',
                attrs: { level: 6 },
              },
            ],
          },
        ],
      },
    ],
    separator: 'none',
  },
  {
    type: ComponentItem.ToolbarGroup,
    label: 'List',
    items: [
      {
        type: ComponentItem.ToolbarCommandButton,
        commandName: 'toggleBulletList',
        display: 'icon',
      },
      {
        type: ComponentItem.ToolbarCommandButton,
        commandName: 'toggleOrderedList',
        display: 'icon',
      },
    ],
    separator: 'none',
  },
  {
    type: ComponentItem.ToolbarGroup,
    label: 'List',
    items: [
      {
        type: ComponentItem.ToolbarCommandButton,
        commandName: 'toggleTaskList',
        display: 'icon',
      },
    ],
    separator: 'none',
  },
  {
    type: ComponentItem.ToolbarGroup,
    label: 'List',
    items: [
      {
        type: ComponentItem.ToolbarCommandButton,
        commandName: 'toggleBlockquote',
        display: 'icon',
      },
    ],
    separator: 'none',
  },
  {
    type: ComponentItem.ToolbarGroup,
    label: 'Columns',
    items: [
      {
        type: ComponentItem.ToolbarCommandButton,
        commandName: 'toggleColumns',
        attrs: TWO_COLUMNS,
        display: 'icon',
      },
      {
        type: ComponentItem.ToolbarMenu,
        label: 'Columns',
        items: [
          {
            type: ComponentItem.MenuGroup,
            role: 'radio',
            items: [
              {
                type: ComponentItem.MenuCommandPane,
                commandName: 'toggleColumns',
                attrs: TWO_COLUMNS,
              },
              {
                type: ComponentItem.MenuCommandPane,
                commandName: 'toggleColumns',
                attrs: THREE_COLUMNS,
              },
              {
                type: ComponentItem.MenuCommandPane,
                commandName: 'toggleColumns',
                attrs: FOUR_COLUMNS,
              },
            ],
          },
        ],
      },
    ],
    separator: 'none',
  },
  {
    type: ComponentItem.ToolbarGroup,
    label: 'Sub Sup',
    items: [
      {
        type: ComponentItem.ToolbarCommandButton,
        commandName: 'toggleSubscript',
        display: 'icon',
      },
      {
        type: ComponentItem.ToolbarCommandButton,
        commandName: 'toggleSuperscript',
        display: 'icon',
      },
    ],
    separator: 'none',
  },
  {
    type: ComponentItem.ToolbarGroup,
    label: 'Table',
    items: [
      {
        type: ComponentItem.ToolbarCommandButton,
        commandName: 'createTable',
        display: 'icon',
      },
      // {
      //   type: ComponentItem.ToolbarCommandButton,
      //   commandName: 'deleteTable',
      //   display: 'icon',
      // },
    ],
  },
  // {
  //   type: ComponentItem.ToolbarGroup,
  //   label: 'Text Case',
  //   items: [
  //     {
  //       type: ComponentItem.ToolbarCommandButton,
  //       commandName: 'setTextCase',
  //       attrs: { casing: 'none' },
  //       display: 'icon',
  //     },
  //     {
  //       type: ComponentItem.ToolbarCommandButton,
  //       commandName: 'setTextCase',
  //       attrs: { casing: 'uppercase' },
  //       display: 'icon',
  //     },
  //     {
  //       type: ComponentItem.ToolbarCommandButton,
  //       commandName: 'setTextCase',
  //       attrs: { casing: 'lowercase' },
  //       display: 'icon',
  //     },
  //     {
  //       type: ComponentItem.ToolbarCommandButton,
  //       commandName: 'setTextCase',
  //       attrs: { casing: 'capitalize' },
  //       display: 'icon',
  //     },
  //     {
  //       type: ComponentItem.ToolbarCommandButton,
  //       commandName: 'setTextCase',
  //       attrs: { casing: 'small-caps' },
  //       display: 'icon',
  //     },
  //   ],
  //   separator: 'none',
  // },
];
