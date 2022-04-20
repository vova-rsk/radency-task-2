import { ComponentStory, ComponentMeta } from '@storybook/react';
import CategoryIcon from './CategoryIcon';
import { CATEGORIES } from '../../../utils/constants';

const { TASK, RANDOM_THOUGHT, IDEA, QUOTA } = CATEGORIES;

const exportedComponent = {
    title: 'TABLE/CategoryIcon',
    component: CategoryIcon,
    argTypes: {
        categoryName:{ 
            type: 'string',
            description: 'Sets the custom icon or default to display',
            defaultValue: '',
            options:[TASK, RANDOM_THOUGHT, IDEA, QUOTA, 'default'],
            control: {
                type:'radio'
            }
        }
    }
} as ComponentMeta<typeof CategoryIcon>;

export default exportedComponent;

const Template: ComponentStory<typeof CategoryIcon> = (args) => <CategoryIcon {...args} />;

export const Icon = Template.bind({});
Icon.args = {
   categoryName:''
};
