import Checkbox from '@mui/material/Checkbox';
import WhiteBoxWrapper from '../../UI/WhiteBoxWrapper/WhiteBoxWrapper';
import Button from '../../UI/Button';
import { ProductItemInterface } from '../App/utils';
import styles from './ProductTable.module.scss';

interface Props {
  data: ProductItemInterface[],
  selectedProduct: ProductItemInterface | null,
  setSelectedProduct: React.Dispatch<React.SetStateAction<ProductItemInterface | null>>,
  onBuyClick: (id: number) => void
}

const ProductsTable: React.FC<Props> = ({
  data, selectedProduct, setSelectedProduct, onBuyClick
}) => {
  return (
    <WhiteBoxWrapper className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            {['', 'Name', 'Company', 'Color', 'Stock', 'Price', 'Count', 'Reviews', 'Location', 'Additional']
            .map((headLabel) => (
              <th key={headLabel}>{headLabel}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            const inStock = row.count > 0;
            return (
              <tr
                key={row.id}
                role="button"
                onClick={() => {
                  if (selectedProduct?.id === row.id) {
                    setSelectedProduct(null);
                  } else setSelectedProduct(row);
                }}
              >
                <td>
                  <Checkbox checked={Boolean(row.id === selectedProduct?.id)} />
                </td>
                <td><b>{row.name}</b></td>
                <td>{row.company}</td>
                <td>{row.color}</td>
                <td style={inStock ? { color: '#8FD694' } : { color: '#D69090' }}>
                  <b>{inStock ? 'In Stock' : 'Out of stock'}</b>
                </td>
                <td>{`${row.price}$`}</td>
                <td><b>{row.count}</b></td>
                <td>{row.reviews}</td>
                <td>{row.sellerLocation}</td>
                <td
                  role="button"
                  onClick={e => {
                    e.stopPropagation();
                    onBuyClick(row.id);
                  }}
                >
                  <Button disabled={!inStock} label="Buy" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </WhiteBoxWrapper>
  )
}

export default ProductsTable;
