import React, { useState } from 'react';
import { Chart } from "react-google-charts";
import ProductsTable from '../ProductsTable';
import Header from '../Header';
import Filters from '../Filters';
import SelectedProduct from '../SelectedProduct';
import styles from './App.module.scss';
import { ProductItemInterface } from './utils';
import WhiteBoxWrapper from '../../UI/WhiteBoxWrapper/WhiteBoxWrapper';
import mock from './mock';

const App: React.FC = () => {
  const [data, setData] = useState<ProductItemInterface[]>(mock);
  const [selectedProduct, setSelectedProduct] = useState<ProductItemInterface | null>(null);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const onBuyClick = (id: number) => {
    setData(products => {
      const newProducts = structuredClone(products);
      const index = products.findIndex(item => item.id === id);
      if (index !== -1 && newProducts[index].count > 0) {
        newProducts[index].count = newProducts[index].count - 1;
      }
      return newProducts;
    })
  }

  return (
    <div className={styles.container}>
      <Header tableLength={data.length} setShowFilters={setShowFilters} />
      <div className={styles.tableContainer}>
        {showFilters && <Filters />}
        <ProductsTable
          data={data}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          onBuyClick={onBuyClick}
        />
        {selectedProduct && <SelectedProduct product={selectedProduct} />}
      </div>
      <WhiteBoxWrapper>
        <Chart
          chartType="PieChart"
          data={[
            ["Status", "Quantity"],
            ['In Stock', data.filter(item => item.count > 0).length],
            ['Out Of Stock', data.filter(item => item.count === 0).length],
          ]}
          width={"100%"}
          height={"400px"}
        />
      </WhiteBoxWrapper>
    </div>
  );
}

export default App;
