import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import Container from './ModalForm.styled';
import { CATEGORIES } from '../../../utils/constants';

interface IProps { 
  name: string;
  category: string;
  content: string;
  handleInputChange: (name:string, value:string)=>void;
  handleApplyBtnClick: () => void;
  handleCloseBtnClick: () => void;
}

const ModalForm = (props:IProps) => {
  const {
    name,
    category,
    content,
    handleInputChange,
    handleApplyBtnClick,
    handleCloseBtnClick,
  } = props;

  const categoriesKeys = Object.keys(CATEGORIES);

  return (
    <Container>
      <FormControl
        required
        sx={{
          m: 1,
          minWidth: '100px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div></div>

        <InputLabel id="demo-simple-select-required-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={category}
          label="category *"
          name="category"
          sx={{ width: '200px' }}
          onChange={e => { 
                const { name, value } = e.target;
                handleInputChange(name, value); 
          }}
        >
          {categoriesKeys.map((key, idx) => (
            <MenuItem value={CATEGORIES[key]} key={idx}>
              {CATEGORIES[key]}
            </MenuItem>
          ))}
        </Select>
        <TextField
          required
          id="outlined-required"
          name="name"
          label="name"
          sx={{ width: '250px', marginLeft: '20px' }}
          value={name}
          onChange={e => {
            const { name, value } = e.target;
            handleInputChange(name, value);
          }}
        />
        <TextField
          required
          id="outlined-required"
          name="content"
          label="content"
          sx={{ width: '400px', marginLeft: '20px' }}
          value={content}
          onChange={e => {
            const { name, value } = e.target;
            handleInputChange(name, value);
          }}
        />
      </FormControl>
      <FormControl
        required
        sx={{
          m: 1,
          width: '70px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <IconButton
          name="apply"
          aria-label="apply"
          size="large"
          sx={{ width: '30px', height: '30px' }}
          onClick={handleApplyBtnClick}
        >
          <DoneIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          name="cancel"
          aria-label="cancel"
          size="large"
          sx={{ width: '30px', height: '30px' }}
          onClick={handleCloseBtnClick}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      </FormControl>
    </Container>
  );
};

export default ModalForm;
