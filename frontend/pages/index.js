import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button } from 'react-bootstrap';
const IndexPage = () => {
  return (
    <div>
          <Table striped bordered hover>
    <thead>
      <tr>
        <th>id</th>
        <th>제몫</th>
        <th>글쓴이</th>
        <th>조회 수</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  </Table>
    <Button variant="primary">Primary</Button>
    </div>
  );
};
// function BasicExample() {
//   return (
//     <div>
//       <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>id</th>
//           <th>제목</th>
//           <th>글쓴이</th>
//           <th>조회</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td>@mdo</td>
//         </tr>
//       </tbody>
//     </Table>
//     {/* 버튼 컴포넌트 */}
//     {TypesExample()}
//     </div>
//   );
// }
// function TypesExample() {
//   return (
//     <>
//       <Button variant="primary">Primary</Button>{' '}
//     </>
//   );
// }

export default IndexPage;
