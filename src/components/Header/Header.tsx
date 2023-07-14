import React from 'react';
import Button from '../../UI/Button';
import WhiteBoxWrapper from '../../UI/WhiteBoxWrapper';
import styles from './Header.module.scss';

interface Props {
  tableLength: number,
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<Props> = ({ tableLength, setShowFilters }) => {
  return (
    <WhiteBoxWrapper className={styles.container}>
      {`${tableLength} Products`}
      <Button label="Filters" onClick={() => setShowFilters(prev => !prev)} />
    </WhiteBoxWrapper>
  )
}

export default Header;
