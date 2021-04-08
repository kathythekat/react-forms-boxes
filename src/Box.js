function Box({backgroundColor, width, height, id}) {
  const divStyle ={
    backgroundColor:`${backgroundColor}`,
      width: `${width}px`,
      height: `${height}px`,
      id: {id}
  }
  return (<div style={divStyle}></div>)
}

export default Box;