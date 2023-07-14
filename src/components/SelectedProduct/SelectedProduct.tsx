import WhiteBoxWrapper from "../../UI/WhiteBoxWrapper/WhiteBoxWrapper";
import { ProductItemInterface } from "../App/utils";
import styles from './SelectedProduct.module.scss';

interface Props {
  product: ProductItemInterface
}

const SelectedProduct: React.FC<Props> = ({ product }) => {
  return (
    <WhiteBoxWrapper className={styles.container}>
      <div className={styles.name}>{product.name}</div>
      <div className={styles.company}>{product.company}</div>
      <img
        className={styles.productImage}
        src={product.imageUrl}
        alt={product.name}
      />
    </WhiteBoxWrapper>
  );
}

export default SelectedProduct;
