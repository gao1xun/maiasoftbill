import React from 'react';

import { Tooltip } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';

export default (props) =>
    <Tooltip title={props.title} placement="top" arrow fontSize="small">
        <HelpIcon />
    </Tooltip>