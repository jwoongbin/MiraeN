import "./Mindmap.css"

function Mindmap({data}){
  console.log(data);
  return(
    <div className="mindmap-wrap">
      <div className="header"><h1>초코 초등사회 3-1</h1></div>
      <div className="contents">
        <div className="subject">옛날의 생활 모습과 관련된 옛이야기</div>
        <div className="sub-subject1">마포이야기</div>
        <div className="sub-subject2">통영이야기</div>
        <div className="sub-subject3">차전놀이</div>
        <div className="quiz"></div>
      </div>
      <div className="footer"></div>
    </div>

  );

}
  

export default Mindmap;