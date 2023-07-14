import styles from './WhiteBoxWrapper.module.scss';

interface Props {
  children: React.ReactNode,
  className?: string
}

const WhiteBoxWrapper: React.FC<Props> = ({ children, className }) => (
  <div className={`${styles.container} ${className}`}>{children}</div>
)

export default WhiteBoxWrapper;
