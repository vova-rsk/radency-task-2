import CardMedia from '@mui/material/CardMedia';
import NotFoundImg from './404-alien.png';

export default function NotFoundPage() {
  return (
    <div
      style={{
        margin: '80px auto',
        width: '372px',
        height: '484px',
      }}
    >
      <CardMedia
        component="img"
        width={372}
        height={484}
        image={NotFoundImg}
        alt="alian"
      />
    </div>
  );
}
