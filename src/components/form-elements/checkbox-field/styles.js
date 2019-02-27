import styled from 'styled-components';
import { visibilityStyles } from '../../styled/accessibility';

export const CheckboxLabel = styled.label`
  display: block;
  padding-left: 15px;
  text-indent: -15px;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  line-height: 1;
  position: relative;

  :before {
    background: ${({ theme }) => theme.palette.white};
    border: 2px solid ${({ theme }) => theme.palette.grey80};
    content: '';
    display: inline-block;
    height: 20px;
    margin-right: 10px;
    position: relative;
    top: 2px;
    visibility: visible;
    width: 20px;
  }

  :after {
    background-position: 50%;
    background-repeat: no-repeat;
    content: '';
    display: inline-block;
    height: 18px;
    left: 4px;
    position: absolute;
    top: 3px;
    visibility: visible;
    width: 12px;
  }
`;

export const Input = styled.input`
  ${visibilityStyles};

  :focus + label:before {
    box-shadow: ${({ theme }) => theme.boxshadow.small};
    border-color: ${({ theme }) => theme.palette.black};
  }

  :checked + label:after {
    content: '';
    display: block;
    position: absolute;
    border: solid ${({ theme }) => theme.palette.black};
    border-left: solid ${({ theme }) => theme.palette.white};
    border-width: 0 2px 2px 0;
    height: 13px;
    left: 7px;
    top: 4px;
    transform: rotate(45deg);
    width: 6px;
    zoom: 1;
  }
`;
