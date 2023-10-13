import PropTypes from 'prop-types';
import { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    Currencyoptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currenctDisabled = false,
    className = "",
}) {
   
    const amountId = useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id = {amountId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}

                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currenctDisabled}
                >
                    
                    {Currencyoptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

InputBox.propTypes = {
    label: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    onAmountChange: PropTypes.func.isRequired,
    onCurrencyChange: PropTypes.func.isRequired,
    Currencyoptions: PropTypes.array.isRequired,
    selectedCurrency: PropTypes.string.isRequired,
    amountDisabled: PropTypes.bool.isRequired,
    currenctDisabled: PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
};

export default InputBox;

