import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { ROUTES } from '../../utils/constants';

const pages = [
  {
    name: 'Active notes',
    route: ROUTES.ACTIVE,
  },
  {
    name: 'Archive',
    route: ROUTES.ARCHIVE,
  },
];

export default function ResponsiveAppBar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="xl" id="edit-portal">
        <Toolbar disableGutters>
          <TextSnippetIcon sx={{ marginRight: '10px' }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex', marginRight: '50px' },
            }}
          >
            NOTES
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({ name, route }) => (
              <Button
                key={name}
                onClick={() => navigate(route)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
