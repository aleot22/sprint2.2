import throttle from '../throttle'; 


test('throttle should call the original function only once within the specified interval', () => {
  jest.useFakeTimers(); 

  const originalFunction = jest.fn();

  const throttledFunction = throttle(originalFunction, 1000);

  throttledFunction('argument');
  throttledFunction('argument');

  // Avanza el tiempo en 1000 ms
  jest.advanceTimersByTime(1000);

  // La función original debería haber sido llamada solo una vez, aunque fue llamada dos veces
  expect(originalFunction).toHaveBeenCalledTimes(1);

  // Llama la función throttled nuevamente después de 1000 ms
  throttledFunction('argument');

  // Avanza el tiempo en otros 1000 ms
  jest.advanceTimersByTime(1000);

  // La función original debería ser llamada por segunda vez ahora
  expect(originalFunction).toHaveBeenCalledTimes(2);
});
