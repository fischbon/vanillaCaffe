react router 

1.npm i react-router-dom@6
2. (in index.js)
import {BrowserRouter} from 'react-router-dom';

(in root.render)
root.render(
<BrowserRouter>
  <App />
</BrowserRouter>
);

3.in App.js
import {Routes, Route} from 'react-router-dom'

React player

1.npm install react-player

2.
import React from 'react'
import ReactPlayer from 'react-player'

3.
<ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />

4. if using only 1 type of source use example youtube
import React from 'react'
import ReactPlayer from 'react-player/youtube'

---------------------------------React Card-----------------------------
https://mui.com/material-ui/react-card/#api

npm install @mui/material @emotion/react @emotion/styled

