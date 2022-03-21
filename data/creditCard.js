module.exports = (showCardNumber) => ({
  balance: 200000,
  cardNumber: showCardNumber ? '4321 9876 2468 1234' : '**** **** **** 1234',
  holder: {
    firstName: 'Eric',
    lastName: 'Samson',
    address: {
      billing: {
        city: 'San Fransisco',
        state: 'CA',
        zipcode: '94108',
        line1: '1882 Gerard Street',
      },
    },
  },
});
