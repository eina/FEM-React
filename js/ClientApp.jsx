const MyTitle = function(props) {
  return React.createElement('div', null, React.createElement('h1', { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function() {
  return React.createElement(
    'div',
    null,
    React.createElement(MyTitle, { title: 'my-first-component', color: 'palegoldenrod' }),
    React.createElement(MyTitle, { title: 'Sawbones', color: 'papayawhip' }),
    React.createElement(MyTitle, { title: 'My Favourite Murder', color: 'rebeccapurple' }),
    React.createElement(MyTitle, { title: 'The History Chicks', color: 'seagreen' })
  );
};

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));
