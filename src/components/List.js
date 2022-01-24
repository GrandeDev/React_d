function List(props) {
  return(
    <ul>
      {props.itemsList.map(item => (<li key={item.id}>{item}</li>))}
    </ul>
  );
}

export default List;