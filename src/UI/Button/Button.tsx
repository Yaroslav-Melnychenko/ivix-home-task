import React from 'react';
import Button from '@mui/material/Button';
import styles from './Button.module.scss';

interface Props {
  disabled?: boolean,
  label?: string,
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const CustomButton: React.FC<Props> = ({ label, disabled, onClick }) => (
  <Button
    disabled={disabled}
    className={styles.container}
    variant="contained"
    classes={{
      root: styles.root
    }}
    onClick={onClick}
  >
    {label}
  </Button>
)

export default CustomButton;
