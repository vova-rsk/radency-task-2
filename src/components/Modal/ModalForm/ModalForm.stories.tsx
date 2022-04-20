import { ComponentStory, ComponentMeta } from '@storybook/react';
import ModalForm from './ModalForm';
import { CATEGORIES } from '../../../utils/constants';

const { TASK, RANDOM_THOUGHT, IDEA, QUOTA } = CATEGORIES;

const exportedComponent = {
    title: 'MODAL/ModalForm',
    component: ModalForm,
    decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
    argTypes: {
        name: {
            type: 'string',
            description:'category name',
            defaultValue: '',
        },
        category: {
            type: 'string',
            defaultValue: '',
            options: ['', TASK, RANDOM_THOUGHT, IDEA, QUOTA],
            control: {
                type:'radio'
            }
        },
        content: {
            type: 'string',
            description:'todo description',
            defaultValue: '',
        },
    }
} as ComponentMeta<typeof ModalForm>;

export default exportedComponent;

const Template: ComponentStory<typeof ModalForm> = args => <ModalForm {...args} />;

export const Empty = Template.bind({});
Empty.args = {
    name: '',
    category: '',
    content: '',
    handleInputChange: () => console.log('change external state'),
    handleApplyBtnClick: () => console.log('apply btn click'),
    handleCloseBtnClick: () => console.log('close btn click')
};

export const Filled = Template.bind({});
Filled.args = {
    name: 'go shopping',
    category: 'Task',
    content: 'To go shopping tomorrow',
    handleInputChange: () =>console.log('change external state'),
    handleApplyBtnClick: () => console.log('apply btn click'),
    handleCloseBtnClick: () => console.log('close btn click')
};