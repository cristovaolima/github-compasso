import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    Button,
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle
} from 'reactstrap';
import TableRepos from '../components/tablerepos';

export default function CardUser({user, repos, reposStarred}) {
    const [openRepos, setOpenRepos] = useState(false);
    const [openReposStarred, setOpenReposStarred] = useState(false);

    function openReposUser(){
        setOpenRepos(!openRepos);
        setOpenReposStarred(false);
    }

    function openReposUserStarred(){
        setOpenReposStarred(!openReposStarred);
        setOpenRepos(false);
    }

    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        {user.name}
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {user.login}
                    </CardSubtitle>
                    <CardText>
                        {user.bio}
                    </CardText>
                    <Link to={'/' + user.login}>
                        <Button color="primary" outline>
                          Perfil
                        </Button>
                    </Link>
                    {' '}
                    <Button color="primary" outline={!openRepos} onClick={openReposUser}>
                       Repos 
                    </Button>
                    {' '}
                    <Button color="primary" outline={!openReposStarred} onClick={openReposUserStarred}>
                        Starred
                    </Button>
                </CardBody>
            </Card>
            <br/>
            {openRepos ? <TableRepos repos={repos}/> : null }
            {openReposStarred ? <TableRepos repos={reposStarred}/> : null }             
        </>
    );
}