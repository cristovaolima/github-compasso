import React from 'react';
import { 
    Button,
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle
} from 'reactstrap';

export default function CardUser({user}) {
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
                <Button color="primary" outline>
                  Perfil
                </Button>
            </CardBody>
        </Card>
   </>
 );
}