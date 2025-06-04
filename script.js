fetch("https://api.currencyfreaks.com/latest?apikey=c3612828d8ac4d24adc9b5a1e23f8102").then((result)=>{
    let data = result.json();
    return data;
}).then((currency)=>{
    document.getElementById('convert-btn').onclick = ()=>{
        let amount = parseFloat(document.getElementById('amount').value);
        let fromCurrency = document.getElementById('from-currency').value;
        let toCurrency = document.getElementById('to-currency').value;
        let convertedAmount = (amount * currency.rates[toCurrency] / currency.rates[fromCurrency]).toFixed(2);
        document.getElementById('converted-amount').innerHTML = `${convertedAmount} ${toCurrency}`;
        document.querySelector(".one1").innerHTML = currency.rates[document.querySelector(".one").innerHTML];
        document.querySelector(".two2").innerHTML = currency.rates[document.querySelector(".two").innerHTML];
        document.querySelector(".three3").innerHTML = currency.rates[document.querySelector(".three").innerHTML];
        document.querySelector(".four4").innerHTML = currency.rates[document.querySelector(".four").innerHTML];
    }
})
document.getElementById('swap-btn').onclick = ()=>{
    const fromCurrency = document.getElementById('from-currency');
    const toCurrency = document.getElementById('to-currency');
    [fromCurrency.value,toCurrency.value]=[toCurrency.value,fromCurrency.value]
}