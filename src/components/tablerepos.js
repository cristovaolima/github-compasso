import React from 'react';
import { 
    Button,
    Table
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default function TableRepos({repos}) {
    return (
        <div>
            <Table size="sm">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                    {repos.map(repo => (
                        <tr key={repo.id}>
                            <td>{repo.name}</td>
                            <td>
                                <a href={repo.html_url} target="_blank">
                                      <Button color="primary" outline>
                                        Link
                                      </Button>
                                </a>
                            </td>
                        </tr>
                    ))}
              </tbody>
            </Table>
        </div>
    );
}