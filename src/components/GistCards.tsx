import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GistDataType } from '../types';
import { Divider} from '@mui/material';
import PaginationHandler from './PaginationHandler';
import './GistCards.css';

const GistCards = ({
  data,
  page,
  setPage
}: {
  page: number,
  data: null | GistDataType[],
  setPage: React.Dispatch<React.SetStateAction<number>>,
}) => {

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const gistFiles = data?.map(row => {
    return {...row.files, owner: row.owner};
  });

  // const newArr = gistFiles?.reduce((acc, curr) => {
  //   acc = {

  //   }
  // }, {});

  console.log('data', data);
  console.log('gistFiles', gistFiles);

  return (
    <div className={'fullContainer'}>
      <PaginationHandler page={page} onPageChange={handleChangePage}/>
      <div className={'innerContainer'}>
        {data?.map(row =>
          <Card key={row.id} sx={{ minwidth: 275, marginTop: 5 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {row.description}
              </Typography>
            </CardContent>
            <Divider />
            <CardActions>
              {row.owner?.login}
            </CardActions>
          </Card>
        )}
      </div>
    </div>
  );
}

export default GistCards;