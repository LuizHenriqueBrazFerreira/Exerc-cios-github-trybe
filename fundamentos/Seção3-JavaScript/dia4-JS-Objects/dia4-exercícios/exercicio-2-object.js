const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (fullOrder) => {
  const deliveryPerson = fullOrder.order.delivery.deliveryPerson;
  const name = fullOrder.name;
  const fone = fullOrder.phoneNumber;
  const address = fullOrder.address.street;
  const number = fullOrder.address.number;
  const apartment = fullOrder.address.apartment;

  return `Olá, ${deliveryPerson}, entrega para: ${name}, Telefone: ${fone}, ${address}, Número: ${number}, Apartamento: ${apartment}.`
};


console.log(customerInfo(order));

const orderModifier = (fullOrder) => {
  // Adicione abaixo as informações necessárias.
  fullOrder.name = 'Luiz Silva',
  fullOrder.payment.total = 50.00;
  const orderPizza = Object.keys(fullOrder.order.pizza).join(', ');

  return `Olá, ${fullOrder.name}, o valor total do seu pedido de ${orderPizza} é de R$ ${fullOrder.payment.total}.`
}


console.log(orderModifier(order));