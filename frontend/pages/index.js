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
    <Button variant="primary">글쓰기</Button>
    </div>
  );
};

export default IndexPage;
