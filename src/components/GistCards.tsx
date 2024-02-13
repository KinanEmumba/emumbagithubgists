import { GistDataType } from '../types';
import './GistCards.css';
import GistSingleCard from './GistSingleCard';

const GistCards = ({
  data,
}: {
  data: null | GistDataType[],
}) => {
  return (
    <div className={'fullContainer'}>
      <div className={'innerContainer'}>
        {data?.map(row => <GistSingleCard key={row.id} row={row} />)}
      </div>
    </div>
  );
}

export default GistCards;