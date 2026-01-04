// Constants
const DECIMAL_PLACES = 2;

// Get input elements
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');

// Add event listeners for real-time conversion
celsiusInput.addEventListener('input', function() {
    const celsius = parseFloat(this.value);
    
    if (isNaN(celsius) || this.value === '') {
        fahrenheitInput.value = '';
        kelvinInput.value = '';
        return;
    }
    
    // Convert Celsius to Fahrenheit and Kelvin
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;
    
    fahrenheitInput.value = fahrenheit.toFixed(DECIMAL_PLACES);
    kelvinInput.value = kelvin.toFixed(DECIMAL_PLACES);
});

fahrenheitInput.addEventListener('input', function() {
    const fahrenheit = parseFloat(this.value);
    
    if (isNaN(fahrenheit) || this.value === '') {
        celsiusInput.value = '';
        kelvinInput.value = '';
        return;
    }
    
    // Convert Fahrenheit to Celsius and Kelvin
    const celsius = (fahrenheit - 32) * 5/9;
    const kelvin = celsius + 273.15;
    
    celsiusInput.value = celsius.toFixed(DECIMAL_PLACES);
    kelvinInput.value = kelvin.toFixed(DECIMAL_PLACES);
});

kelvinInput.addEventListener('input', function() {
    const kelvin = parseFloat(this.value);
    
    if (isNaN(kelvin) || this.value === '') {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        return;
    }
    
    // Kelvin cannot be negative (absolute zero is 0K)
    if (kelvin < 0) {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        return;
    }
    
    // Convert Kelvin to Celsius and Fahrenheit
    const celsius = kelvin - 273.15;
    const fahrenheit = (celsius * 9/5) + 32;
    
    celsiusInput.value = celsius.toFixed(DECIMAL_PLACES);
    fahrenheitInput.value = fahrenheit.toFixed(DECIMAL_PLACES);
});
