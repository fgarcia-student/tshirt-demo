const APP_ID = process.env.GATSBY_SQUARE_APP_ID ?? "";

export const squareApiWrapper = {
  // DOCS: https://developer.squareup.com/docs/api/paymentform#paymentform-configurationfields
  createPaymentForm: (params) => new (global as any).SqPaymentForm({
    applicationId: APP_ID,
    autoBuild: false,
    inputClass: 'test',
    cardNumber: {
      elementId: 'sq-card-number',
      placeholder: 'Card Number'
    },
    cvv: {
        elementId: 'sq-cvv',
        placeholder: 'CVV'
    },
    expirationDate: {
        elementId: 'sq-expiration-date',
        placeholder: 'MM/YY'
    },
    postalCode: {
        elementId: 'sq-postal-code',
        placeholder: 'Postal'
    },
    // SqPaymentForm callback functions
    callbacks: {
        cardNonceResponseReceived: function (errors, nonce, cardData) {
          if (params && params.cardNonceResponseReceived) {
            params.cardNonceResponseReceived(errors, nonce, cardData);
          } else {
            alert('cardNonceResponseReceived: No implementation found.')
          }
        }
    }
  }),
  handlePayment: (params) => {
    if (params && params.nonce) {
      fetch(params.url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nonce: params.nonce
        })
      })
      .then(response => {
        if (!response.ok) {
          return response.json().then(errorInfo => Promise.reject(errorInfo)); //UPDATE HERE
        }
        return response.json(); //UPDATE HERE
      })
      .then(data => {
        console.log(data); //UPDATE HERE
        alert('Payment complete successfully!\nCheck browser developer console for more details');
      })
      .catch(err => {
        console.error(err);
        alert('Payment failed to complete!\nCheck browser developer console for more details');
      });
    } else {
      alert('nonce: argument missing from function');
    }
  },
}