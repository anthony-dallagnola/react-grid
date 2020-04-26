import styled from 'styled-components';
import { StyledProps } from './models/StyledProps';


const border = `2px black solid`;

const GridContainer = styled.div`
  margin: auto;
  border: ${border};
`;

const GridHeader = styled.div`
  display: flex;
  border-bottom: ${border};

  div {
    border-right: ${border};
    &:last-child {
      border: 0;
    }
    div {
      border-right: 0;
    }
  }
`;

const GridRow = styled.div`
  display: flex;
  border-bottom: ${border};
  
  &:last-child {
    border: 0;
  }

  &:nth-child(2n) {
    background-color: lightgray;
  }

  div {
    border-right: ${border};
    &:last-child {
      border: 0;
    }
    div {
      border-right: 0;
    }
  }
`;

const SortIcon = styled.img`
  height: 15px;
  position: absolute;
  right: 0;
  top: 2.5px;
  cursor: pointer;
`;

const cellStyle = `
  display: inline-block;
  font-size: 12px;
`;

const DivHeaderCell = styled.div<StyledProps>`
  width: ${(props) => props.width};
  text-align: center;
  position: relative;
  line-height: 20px;

  ${cellStyle}
`;

const DivDataCell = styled.div<StyledProps>`
  width: ${(props) => props.width};

  ${cellStyle}
`;

const DivDataCellContent = styled.div`
  margin: 2px 5px;
  word-wrap: break-word;

`;

export {
  GridContainer,
  GridHeader,
  GridRow,
  SortIcon,
  DivHeaderCell,
  DivDataCell,
  DivDataCellContent,
};
