import React from 'react';
import Button from '@material-ui/core/Button';

export default function MisocaMenu() {
  return (
    <div>
        <Button variant="contained" size="medium" color="primary" >
            請求書
        </Button>
        <Button variant="contained" size="medium" color="primary" >
            取引先
        </Button>
    </div>
  );
}