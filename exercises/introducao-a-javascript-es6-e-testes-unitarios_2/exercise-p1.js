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
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const delivPers = order.order.delivery.deliveryPerson;
const orderName = order.name;
const tel = order.phoneNumber;
const rua = order.address.street;
const num = order.address.number;
const apto = order.address.apartment;

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliverMessage = `Olá ${delivPers}, entrega para: ${orderName}, Telefone ${tel}, R. ${rua}, Nº ${num}, AP: ${apto}.`
  console.log(deliverMessage);
}

customerInfo(order);

const nomeComrprador = order.name = 'Luiz Silva';
const novoTotal = order.payment.total = '50';
const pedido = Object.keys(order.order.pizza);
const bebida = order.order.drinks.coke.type;

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const mensagemEntrega = `Olá ${nomeComrprador}, o total do seu pedido de ${pedido} e ${bebida} é R$ ${novoTotal},00.`
  console.log(mensagemEntrega);
}

orderModifier(order);