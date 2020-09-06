import React, { forwardRef } from 'react'

import { CardContent, Typography, Card } from '@material-ui/core';
import './styles.css';

const index = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;

  
  return (
    <div ref={ref} className={`message ${isUser && 'message__user'}`}>
      <Card className={isUser? "message__userCard" : "message__gestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {message.username}: {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
})

export default index;