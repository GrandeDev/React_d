function List(props) {
  return(
    <ul>
      {props.itemsList.map(item => (<li>{item}</li>))}
    </ul>
  );
}

export default List;