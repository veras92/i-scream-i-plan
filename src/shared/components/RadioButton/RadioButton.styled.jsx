import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';
import { PRIORITY_OPTIONS } from 'shared/services/priorityOptions';
import { THEME_OPTIONS } from 'shared/services/themeOptions';

export const Label = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;

  color: ${({ theme }) => {
    const mode = useSelector(selectTheme);
    return mode === THEME_OPTIONS.light ? theme.textSecondary : theme.text;
  }};
`;

export const Input = styled.input`
  &:checked,
  &:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  &:checked + label,
  &:not(:checked) + label {
    position: relative;
    padding-left: 18px;
    cursor: pointer;
  }
  &:checked + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 14px;
    height: 14px;
    border: 1px solid
      ${({ theme, value }) => {
        if (value === PRIORITY_OPTIONS.low) return theme.bcgPriorityLow;
        if (value === PRIORITY_OPTIONS.medium) return theme.bcgpPriorityMedium;
        if (value === PRIORITY_OPTIONS.high) return theme.bcgPriorityHigh;
      }};
    border-radius: 100%;
    background: #fff;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  &:checked + label:after,
  &:not(:checked) + label:after {
    content: '';
    width: 10px;
    height: 10px;
    background: ${({ theme, value }) => {
      if (value === PRIORITY_OPTIONS.low) return theme.bcgPriorityLowStrong;
      if (value === PRIORITY_OPTIONS.medium)
        return theme.bcgPriorityMediumStrong;
      if (value === PRIORITY_OPTIONS.high) return theme.bcgPriorityHighStrong;
    }};
    position: absolute;
    top: 2.18px;
    left: 2.1px;
    border-radius: 50%;
  }
  &:not(:checked) + label:before {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  &:checked + label:before {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;
