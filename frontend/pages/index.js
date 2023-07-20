import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import Link from 'next/link';
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
    <div>
      <Link href="/create" legacyBehavior>
          <a>
            글쓰기
          </a>
      </Link>
    </div>
  </div>
  );
};

export default IndexPage;
