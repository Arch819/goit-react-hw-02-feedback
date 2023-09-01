import { styled } from 'styled-components';
export const FeedbackList = styled('ul')({
  display: 'flex',
  justifyContent: 'center',

  gap: '10px',
});

export const Button = styled('button')({
  appearance: 'button',
  backgroundColor: '#1899D6',
  border: 'transparent',
  borderRadius: '10px',
  cursor: 'pointer',
  fontSize: '15px',
  fontWeight: '700',
  letterSpacing: '.8px',
  lineHeight: '20px',
  padding: '8px 12px',
  textAlign: 'center',
  textTransform: 'uppercase',
  userSelect: 'none',
  transition:
    'background 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1)',

  '&:hover': {
    // background: '#303030',
    color: '#ccc',
  },
  'li:nth-child(1) &:hover': {
    background: '#107010',
  },
  'li:nth-child(2) &:hover': {
    background: '#404040',
  },
  'li:nth-child(3) &:hover': {
    background: '#901010',
  },
});
