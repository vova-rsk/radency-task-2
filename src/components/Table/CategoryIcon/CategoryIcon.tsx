import SvgIcon from '@mui/material/SvgIcon';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import { CATEGORIES } from '../../../utils/constants';

interface IProps { 
  categoryName: string;
}

const CategoryIcon = ({ categoryName }:IProps) => {
  const { TASK, RANDOM_THOUGHT, IDEA, QUOTA } = CATEGORIES;
  
  let icon = null;

  switch (categoryName) {
    case TASK:
      icon = LocalGroceryStoreIcon;
      break;
    case RANDOM_THOUGHT:
      icon = PsychologyIcon;
      break;
    case IDEA:
      icon = LightbulbOutlinedIcon;
      break;
    case QUOTA:
      icon = FormatQuoteIcon;
      break;
    default:
      icon = QuestionMarkOutlinedIcon;
  }

  return (
    <div className="flex justify-center items-center w-10 h-10 text-white bg-gray-600 border-none rounded-full">
       <SvgIcon
        component={icon}
        sx={{
          width: '30px',
          height: '30px',
        }}
        inheritViewBox={true}
      />
    </div>
  );
};

export default CategoryIcon;
