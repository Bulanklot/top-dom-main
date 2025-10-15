import { FC } from 'react'
import { NumericFormat } from 'react-number-format';

interface IFormattedPriceProps {
    value: number | string;
}

export const FormattedPrice: FC<IFormattedPriceProps> = ({ value }) => {
  return (
    <NumericFormat
      value={value}
      displayType="text"
      thousandSeparator=" "
    />
  );
};