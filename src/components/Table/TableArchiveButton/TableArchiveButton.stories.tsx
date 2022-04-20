import { ComponentStory, ComponentMeta } from '@storybook/react';
import TableArchiveButton from './TableArchiveButton';
import { STATUS } from '../../../utils/constants';

import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

interface IProps { 
  color?: string;
  handleClick: () => void;
}

type MockFn = (data: {filter:string, children:any}) => JSX.Element;

const Mockstore:MockFn = ({ filter, children }) => (
  <Provider
    store={configureStore({
      reducer: {
        filter: createSlice({
          name: 'filter',
          initialState: filter,
          reducers: {
            changeFilter: (_, action) => action.payload,
          },
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

const exportedStoryItem = {
    title: 'TABLE/TableArchiveButton',
    component: TableArchiveButton,
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  argTypes: {
    color: {
      type: 'string',
      description:'button-icon color'
    },
    handleClick: {
      type: 'function',
      description:'click handler'
    }
  },
} as ComponentMeta<typeof TableArchiveButton>;

export default exportedStoryItem;

const Template = (args:IProps) => <TableArchiveButton {...args} />;

/// Active-table button
export const ToArchive:ComponentStory<typeof TableArchiveButton> = Template.bind({});
ToArchive.decorators = [
  (story) => <Mockstore filter={STATUS.ACTIVE}>{story()}</Mockstore>,
];
ToArchive.args = {
    handleClick:()=>console.log('click')
};

/// Archive-table button
export const ToActive:ComponentStory<typeof TableArchiveButton> = Template.bind({});
ToActive.decorators = [
  (story) => <Mockstore filter={STATUS.ARCHIVED}>{story()}</Mockstore>,
];
ToActive.args = {
    handleClick:()=>console.log('click')
};



