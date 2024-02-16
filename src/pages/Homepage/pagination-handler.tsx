import styled from 'styled-components';
import AppButton from '../../components/shared-components/app-button';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { pageSize } from '../../const-urls';
import { themeColor, themeColorLight } from '../../components/shared-components/app-theme';
import { useEffect, useRef } from 'react';

export const StyledPaginationContainer = styled('div')(() => `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px dotted ${themeColorLight};
  background: white;
  padding: 10px 30px;
  position: sticky;
  bottom: 0;
  z-index: 1;
`
);

export type FlexOneDivProps = {align?: string};

export const FlexOneDiv = styled.div<FlexOneDivProps> `
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: ${(props => props.align || 'flex-start')};
`;

export const StyledPageInputContainer = styled('div')(() => `
  display: flex;
  flex-direction: row;
  color: black;
`
);

export const StyledPageInput = styled('input')(() => `
  border: 1px solid ${themeColor};
  color: ${themeColor};
  background-color: white;
  margin: 0px 5px;
  max-width: 20px;
  text-align: center;
  border-radius: 5px
`
);

const PageInput = ({
  onPageChange,
  page,
}: {
  page: number,
  onPageChange: (newPage: number) => void,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.value = '' + page;
    }
  },[page])

  const handleChange = () => {
    const val = inputRef.current?.value || '';
    if (val === '') return;
    const inputInt = parseInt(val);
    if (inputRef?.current) {
      if (typeof inputInt === 'number') {
        onPageChange(inputInt || 1)
        inputRef.current.defaultValue = '' + inputInt;
      } else {
        inputRef.current.value = '' + page;
      }
    }
  };

  const startingGistNumber = (page: number) => {
    return ((page-1) * pageSize) !== 1 && ((page-1) * pageSize)+1 || 1;
  }
  
  const endingGistNumberPage = (page: number) => {
    return ((page-1) * pageSize) + pageSize;
  }

  return(
    <StyledPageInputContainer>
      {`Page`}
      <StyledPageInput
        ref={inputRef}
        defaultValue={page}
        onBlur={handleChange}
        onKeyUp={(e) => e.key === 'Enter' && handleChange()}
      />
      {`gists ${startingGistNumber(page)} to ${endingGistNumberPage(page)}`}
    </StyledPageInputContainer>
  );
}

const PaginationHandler = ({
  onPageChange,
  page,
}: {
  onPageChange: (newPage: number) => void,
  page: number
}) => {
  return (
    <StyledPaginationContainer>
      <FlexOneDiv />
      <FlexOneDiv align={'center'}>
        {page > 1 && <AppButton
          onClick={() => onPageChange(page - 1)}
          colored={true}
          buttonText={<>
            <WestIcon sx={{marginRight: '5px'}}/>
            Last Page
          </>}
        />}
        <AppButton
          onClick={() => onPageChange(page + 1)}
          colored={true}
          buttonText={<>
            Next Page
            <EastIcon sx={{marginLeft: '5px'}}/>
          </>}
        />
      </FlexOneDiv>
      <FlexOneDiv align={'flex-end'}>
        <PageInput page={page} onPageChange={onPageChange}/>
      </FlexOneDiv>
    </StyledPaginationContainer>
  )
}

export default PaginationHandler;