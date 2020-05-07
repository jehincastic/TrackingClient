import React from 'react';

import useStyles from './styles';

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Hello World!</h1>
    </div>
  );
};

export default Home;
