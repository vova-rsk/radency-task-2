import SvgIcon from '@mui/material/SvgIcon';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import { CATEGORIES } from '../../../utils/constants';
import Container from './CategoryIcon.styled';

function CategoryIcon({ categoryName }) {
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
    <Container>
      <SvgIcon
        component={icon}
        sx={{
          width: '30px',
          height: '30px',
          // color: 'transparent',
          // backgroundColor: 'transparent',
          // borderRadius: '50%',
        }}
        inheritViewBox={true}
      />
    </Container>
  );
}

export default CategoryIcon;
