

function Quiz({data}){
  console.log(data[0].subs[0].questiones[0].num);
  return (
    <div>{data.map((item, index) =>
      data[0].subs[0].questiones[index].question
      )}</div>
  );
}

export default Quiz;
