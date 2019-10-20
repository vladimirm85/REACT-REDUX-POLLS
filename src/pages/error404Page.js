import React from 'react';
import { Link } from 'react-router-dom';
import { RoutesMap } from '../routes';

export default () =>
    <div>
        <h1>Error 404, page not found</h1>
        <hr/>
        <div>
            <p>                     
                <Link to={RoutesMap.home}>Go to home page</Link>
            </p>
        </div>
    </div>